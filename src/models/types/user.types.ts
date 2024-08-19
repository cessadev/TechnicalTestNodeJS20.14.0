import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  teams: Schema.Types.ObjectId[];
}