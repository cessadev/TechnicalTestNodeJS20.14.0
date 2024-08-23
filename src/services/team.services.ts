import mongoose from "mongoose";
import { TeamModel } from "../models/team.models";
import { UserModel } from "../models/user.models";

export const getAllTeams = async () => {
  return await TeamModel.find().populate("members", "name email");
};

export const createTeam = async (name: string, members: mongoose.Types.ObjectId[]) => {
  const team = new TeamModel({ name, members });
  await team.save();
  return { message: "Team created successfully", team };
};

/* export const inviteMemberToTeam = async (teamId: string, userId: string) => {
  const team = await TeamModel.findById(teamId);
  const user = await UserModel.findById(userId);

  if (!team || !user) {
    throw new Error("Team or user not found");
  }

  // Asegurarse de que el miembro no esté ya en el equipo
  if (team.members.includes(user._id as mongoose.Types.ObjectId)) {
    throw new Error("User is already a member of the team");
  }

  team.members.push(user._id as mongoose.Types.ObjectId);
  await team.save();

  return { message: "Member invited successfully", team };
}; */