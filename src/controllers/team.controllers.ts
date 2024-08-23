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

/* export const inviteMemberController = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const { userId } = req.body;
    const response = await inviteMemberToTeam(teamId, userId);
    res.json(response);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res
      .status(400)
      .json({ message: "Error inviting member", error: errorMessage });
  }
}; */
