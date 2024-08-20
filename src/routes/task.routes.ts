import { Router } from 'express';
import { createTask, getAllTasks, updateTask } from '../controllers/task.controllers';
import authMiddleware from '../middlewares/authMiddlewares';

const router = Router();

router.get('/', authMiddleware, getAllTasks);
router.post('/:teamId/tasks', authMiddleware, createTask);
router.put('/:taskId', authMiddleware, updateTask);

export default router;