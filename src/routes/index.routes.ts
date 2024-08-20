import { Router } from 'express';
import authRoutes from './auth.routes';
import teamRoutes from './team.routes';
import taskRoutes from './task.routes';

const router = Router();

router.use('/auth', authRoutes); // Prefijo /auth para rutas de autenticación
router.use('/teams', teamRoutes); // Prefijo /teams para rutas de equipos
router.use('/tasks', taskRoutes); // Prefijo /tasks para rutas de tareas

export default router;