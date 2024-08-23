import { Request, Response } from "express";
import {
  getAllTeams,
  createTeam
} from "../services/team.services";

export const getAllTeamsController = async (req: Request, res: Response) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createTeamController = async (req: Request, res: Response) => {
  try {
    const { name, members } = req.body;
    const response = await createTeam(name, members);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
