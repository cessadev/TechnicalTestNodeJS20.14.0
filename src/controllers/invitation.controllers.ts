import { Request, Response } from "express";
import {
  createInvitation,
  respondToInvitation,
  getInvitationsByTeam,
} from "../services/invitation.services";

export const createInvitationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, teamId, invitedBy } = req.body;
    const invitation = await createInvitation({
      email,
      teamId,
      invitedBy,
      status: "Pending",
    });
    res
      .status(201)
      .json({ message: "Invitation created successfully", invitation });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};

export const respondToInvitationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { invitationId } = req.params;
    const { status } = req.body;
    const updatedInvitation = await respondToInvitation(invitationId, status);
    res.json({
      message: "Invitation response updated successfully",
      updatedInvitation,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};

export const getInvitationsByTeamController = async (
  req: Request,
  res: Response
) => {
  try {
    const { teamId } = req.params;
    const invitations = await getInvitationsByTeam(teamId);
    res.json(invitations);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};
