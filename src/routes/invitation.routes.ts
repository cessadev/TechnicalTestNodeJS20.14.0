import { Router } from "express";
import {
  createInvitationController,
  respondToInvitationController,
  getInvitationsByTeamController,
} from "../controllers/invitation.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const router = Router();

router.post("/new", authMiddleware, createInvitationController);
router.patch("/:invitationId", authMiddleware, respondToInvitationController);
router.get("/by-team/:teamId", authMiddleware, getInvitationsByTeamController);

export default router;
