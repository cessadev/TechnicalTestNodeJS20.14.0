import { Request, Response } from 'express';
import { TaskModel } from '../models/task.models';
import { createTaskForTeam } from '../services/task.services';

export const getAllTasks = async (req: Request, res: Response) => {
  // TODO: Pasar lógica al servicio
  try {
    const tasks = await TaskModel.find().populate('team assignedTo', 'name email');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createTask = async (req: Request, res: Response) => {
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

export const updateTask = async (req: Request, res: Response) => {
  // TODO: Pasar lógica al servicio
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await TaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.status = status;
    await task.save();

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};