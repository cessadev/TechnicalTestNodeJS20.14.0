import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export interface CustomResponse extends Response {
  user?: string | JwtPayload;
}
