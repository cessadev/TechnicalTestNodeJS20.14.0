import { Router } from "express";
import {
  getAllUsersController,
  getUsersByTeamController,
  assignUserToTeamController,
} from "../controllers/user.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", authMiddleware, getAllUsersController);
router.get("/by-team/:teamId", authMiddleware, getUsersByTeamController);
router.post("/assign", authMiddleware, assignUserToTeamController);

export default router;
