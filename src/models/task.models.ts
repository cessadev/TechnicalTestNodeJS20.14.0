import { model, Schema } from "mongoose";
import { ITask } from "./types/task.types";

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pendiente", "En Progreso", "Completada"],
    default: "Pendiente",
  },
  assignedTo: [
    // Relación muchos a muchos con User
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ], 
  team: {
    // Relación muchos a uno con Team
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  }, 
});

export const TaskModel = model<ITask>('Task', TaskSchema);
