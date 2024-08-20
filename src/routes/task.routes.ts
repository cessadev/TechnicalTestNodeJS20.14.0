import { Router } from 'express';
import { createTask, updateTask } from '../controllers/task.controllers';
import authMiddleware from '../middlewares/authMiddlewares';

const router = Router();

router.post('/:teamId/tasks', authMiddleware, createTask);
router.put('/:taskId', authMiddleware, updateTask);

export default router;