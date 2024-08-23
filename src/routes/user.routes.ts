import { Router } from "express";
import {
  getAllUsersController,
  getUsersByTeamController,
  assignUserToTeamController,
} from "../controllers/user.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", authMiddleware, getAllUsersController); // Ruta para obtener todos los usuarios
router.get("/by-team/:teamId", authMiddleware, getUsersByTeamController); // Ruta para obtener usuarios por equipo
router.post("/assign", authMiddleware, assignUserToTeamController); // Ruta para asignar un usuario a un equipo

export default router;
