import { Router } from 'express';
import { createTaskController, getAllTasksController, updateTaskController } from '../controllers/task.controllers';
import authMiddleware from '../middlewares/authMiddlewares';

const router = Router();

router.get('/', authMiddleware, getAllTasksController);
router.post('/:teamId/tasks', authMiddleware, createTaskController);
router.put('/:taskId', authMiddleware, updateTaskController);

export default router;