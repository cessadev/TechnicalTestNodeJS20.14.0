import { Router } from 'express';
import authRoutes from './auth.routes';
import teamRoutes from './team.routes';
import taskRoutes from './task.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/auth', authRoutes); // Prefijo /auth para rutas de autenticación
router.use('/users', userRoutes); // Prefijo /users para rutas de usuarios
router.use('/teams', teamRoutes); // Prefijo /teams para rutas de equipos
router.use('/tasks', taskRoutes); // Prefijo /tasks para rutas de tareas

export default router;