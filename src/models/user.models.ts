import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  teams: Schema.Types.ObjectId[];
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
