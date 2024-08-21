import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.services';

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const response = await registerUser(name, email, password);
    res.status(201).json(response);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: 'Error registering user', error: errorMessage });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const response = await loginUser(email, password);
    res.json(response);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: 'Error logging in', error: errorMessage });
  }
};