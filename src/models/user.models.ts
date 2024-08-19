import { Schema, model } from "mongoose";
import { IUser } from "./types/user.types";

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
