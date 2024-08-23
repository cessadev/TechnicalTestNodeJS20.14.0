import mongoose from "mongoose";
import { TeamModel } from "../models/team.models";

export const getAllTeams = async () => {
  return await TeamModel.find().populate("members", "name email");
};

export const createTeam = async (name: string, members: mongoose.Types.ObjectId[]) => {
  const team = new TeamModel({ name, members });
  await team.save();
  return { message: "Team created successfully", team };
};