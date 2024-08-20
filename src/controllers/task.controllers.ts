import { Request, Response } from 'express';
import { TaskModel } from '../models/task.models';
import { TeamModel } from '../models/team.models';

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, assignedTo } = req.body;
    const { teamId } = req.params;

    const team = await TeamModel.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    const task = new TaskModel({ title, description, status, team: teamId, assignedTo });
    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
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