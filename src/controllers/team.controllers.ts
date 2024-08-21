import { Request, Response } from "express";
import { TeamModel } from "../models/team.models";
import { UserModel } from "../models/user.models";
import mongoose from 'mongoose';

export const getAllTeams = async (req: Request, res: Response) => {
  try {
    const teams = await TeamModel.find().populate('members', 'name email');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createTeam = async (req: Request, res: Response) => {
  try {
    const { name, members } = req.body;
    const team = new TeamModel({ name, members });

    await team.save();
    res.status(201).json({ message: "Team created successfully", team });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const inviteMember = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const { userId } = req.body;

    const team = await TeamModel.findById(teamId);
    const user = await UserModel.findById(userId);

    if (!team || !user) {
      return res.status(404).json({ message: "Team or user not found" });
    }

    // Forzamos la conversión a `Schema.Types.ObjectId` a través de `unknown`
    team.members.push(user._id as unknown as mongoose.Types.ObjectId);
    await team.save();

    res.json({ message: "Member invited successfully", team });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
