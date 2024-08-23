import jwt from "jsonwebtoken";
import "dotenv/config";
import { NextFunction } from "express";
import { CustomRequest, CustomResponse } from "../types/types";

const authMiddleware = (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // INFO: Asigna la información del usuario al request
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token, authorization denied." });
  }
};

export default authMiddleware;
