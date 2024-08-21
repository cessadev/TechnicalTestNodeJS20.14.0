import { model, Schema, Types } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedTo: Types.ObjectId[]; // INFO: Referencia a los usuarios asignados a la tarea
  team: Types.ObjectId; // INFO: Referencia al equipo al que pertenece la tarea
}

export interface ITaskRequest {
  title: string,
  description: string,
  assignedTo: Types.ObjectId[]; // INFO: Referencia a los usuarios asignados a la tarea
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
    // INFO: Relación muchos a muchos con User
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  ], 
  team: {
    // INFO: Relación muchos a uno con Team
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true
  }, 
});

export const TaskModel = model<ITask>('Task', TaskSchema);
