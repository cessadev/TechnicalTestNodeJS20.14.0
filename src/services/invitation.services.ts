import mongoose from "mongoose";
import { InvitationModel, IInvitation } from "../models/invitation.models";
import { TeamModel } from "../models/team.models";
import { UserModel } from "../models/user.models";

export const createInvitation = async (invitationData: IInvitation) => {
  const { email, teamId, invitedBy } = invitationData;

  // Verificar si el equipo existe
  const teamExists = await TeamModel.findById(teamId);
  if (!teamExists) {
    throw new Error("Team not found");
  }

  // Verificar si el usuario que invita existe
  const userExists = await UserModel.findById(invitedBy);
  if (!userExists) {
    throw new Error("User not found");
  }

  // Crear la invitación
  const invitation = new InvitationModel({ email, teamId, invitedBy });
  return await invitation.save();
};

export const respondToInvitation = async (
  invitationId: string,
  status: "Acepted" | "Rejected"
) => {
  const invitationIdObjectId = new mongoose.Types.ObjectId(invitationId);

  const invitation = await InvitationModel.findById(invitationIdObjectId);
  if (!invitation) {
    throw new Error("Invitation not found");
  }

  invitation.status = status;

  if (status === "Acepted") {
    // Buscar al usuario invitado por el correo electrónico de la invitación
    const user = await UserModel.findOne({ email: invitation.email });
    if (!user) {
      throw new Error("User not found");
    }

    // Añadir el usuario al array de miembros del equipo
    const team = await TeamModel.findById(invitation.teamId);
    if (!team) {
      throw new Error("Team not found");
    }

    if (!team.members.includes(user._id)) {
      team.members.push(user._id);
      await team.save();
    }
  } else if (status === "Rejected") {
    return { message: "Invitation rejected" };
  }

  await invitation.save();
  return { message: `Invitation ${status.toLowerCase()} successfully` };
};

export const getInvitationsByTeam = async (teamId: string) => {
  const teamIdObjectId = new mongoose.Types.ObjectId(teamId);
  return await InvitationModel.find({ team: teamIdObjectId }).populate(
    "invitedBy",
    "name email"
  );
};
