import { model, Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedTo: Schema.Types.ObjectId[]; // Referencia a los usuarios asignados a la tarea
  team: Schema.Types.ObjectId; // Referencia al equipo al que pertenece la tarea
}

export interface ITaskRequest {
  title: string,
  description: string,
  assignedTo: Schema.Types.ObjectId[];
}

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["Pending", "In progress", "Completed"],
    default: "Pending"
  },
  assignedTo: [
    // Relación muchos a muchos con User
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  ], 
  team: {
    // Relación muchos a uno con Team
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true
  }, 
});

export const TaskModel = model<ITask>('Task', TaskSchema);
