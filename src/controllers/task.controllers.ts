import { Request, Response } from 'express';
import { createTaskForTeam, getAllTasks, updateTaskStatus } from '../services/task.services';

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
      const teamId = req.params.teamId;
      const taskData = req.body;

      const task = await createTaskForTeam(teamId, taskData);

      res.status(201).json(task);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: 'Error creating task', error: errorMessage });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await updateTaskStatus(taskId, status);
    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: 'Error updating task', error: errorMessage });
  }
};