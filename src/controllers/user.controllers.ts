import { Request, Response } from "express";
import {
  getAllUsers,
  getUsersByTeam,
  assignUserToTeam,
} from "../services/user.services";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res
      .status(500)
      .json({ message: "Error fetching users", error: errorMessage });
  }
};

export const getUsersByTeamController = async (req: Request, res: Response) => {
  try {
    const teamId = req.params.teamId;
    const users = await getUsersByTeam(teamId);
    res.json(users);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res
      .status(500)
      .json({ message: "Error fetching users for team", error: errorMessage });
  }
};

export const assignUserToTeamController = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, teamId } = req.body;

    const team = await assignUserToTeam(userId, teamId);
    res
      .status(200)
      .json({ message: "User assigned to team successfully", team });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res
      .status(400)
      .json({ message: "Error assigning user to team", error: errorMessage });
  }
};
