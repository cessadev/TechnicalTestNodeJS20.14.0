import { Schema, model, Types } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  teams: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Team",
    }
  ]
});

export const UserModel = model<IUser>("User", UserSchema);
