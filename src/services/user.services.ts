import { UserModel } from "../models/user.models";
import { TeamModel } from "../models/team.models";
import mongoose from "mongoose";

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
  const userObjectId = convertToObjectId(userId);
  const teamObjectId = convertToObjectId(teamId);

  // Verificar si los ObjectId son válidos
  if (!userObjectId || !teamObjectId) {
    throw new Error("Invalid user ID or team ID");
  }

  // Verificar si el usuario ya pertenece a algún equipo
  const userTeams = await TeamModel.findOne({ members: userObjectId });
  if (userTeams) {
    throw new Error("User already belongs to a team");
  }

  // Verificar si el equipo existe
  const team = await TeamModel.findById(teamObjectId);
  if (!team) {
    throw new Error("Team not found");
  }

  // Asignar el usuario al equipo
  team.members.push(userObjectId);
  await team.save();

  return team;
};

// Función para convertir un string a mongoose.Types.ObjectId
function convertToObjectId(id: string): mongoose.Types.ObjectId | null {
  try {
      return new mongoose.Types.ObjectId(id);
  } catch (error) {
      console.error('Invalid ObjectId:', error);
      return null;
  }
}