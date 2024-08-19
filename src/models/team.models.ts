import { model, Schema } from "mongoose";
import { ITeam } from "./types/team.types";

const TeamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
  },
  members: [
    // Relación muchos a muchos con User
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tasks: [
    // Relación uno a muchos con Task
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const TeamModel = model<ITeam>("Team", TeamSchema);
