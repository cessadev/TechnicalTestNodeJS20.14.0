import { Router } from "express";
import {
  createTaskController,
  getAllTasksController,
  updateTaskController,
} from "../controllers/task.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", authMiddleware, getAllTasksController);
router.post("/new/:teamId", authMiddleware, createTaskController);
router.put("/update/:taskId", authMiddleware, updateTaskController);

export default router;
