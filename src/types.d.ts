import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload; // Define el tipo de la propiedad `user`
  }
}