import { UserModel } from "../models/user.models";
import { TeamModel } from "../models/team.models";
import mongoose, { ObjectId } from "mongoose";

export const getAllUsers = async () => {
  return await UserModel.find();
};

export const getUsersByTeam = async (teamId: string) => {
  const team = await TeamModel.findById(teamId).populate(
    "members",
    "name email"
  );
  if (!team) {
    throw new Error("Team not found");
  }
  return team.members;
};

export const assignUserToTeam = async (userId: string, teamId: string) => {
  const userIdObjectId = new mongoose.Types.ObjectId(userId);
  const teamIdObjectId = new mongoose.Types.ObjectId(teamId);

  // Verificar si el usuario ya pertenece a algún equipo
  const userTeams = await TeamModel.findOne({ members: userIdObjectId });
  if (userTeams) {
    throw new Error("User already belongs to a team");
  }

  // Verificar si el equipo existe
  const team = await TeamModel.findById(teamIdObjectId);
  if (!team) {
    throw new Error("Team not found");
  }

  // Asignar el usuario al equipo
  // TODO: Manejar mejor el cast a ObjectId
  const userIdParse = userIdObjectId as unknown as ObjectId;

  team.members.push(userIdParse);
  await team.save();

  return team;
};
