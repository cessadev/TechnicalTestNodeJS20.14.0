import { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: "Pendiente" | "En Progreso" | "Completada";
  assignedTo: Schema.Types.ObjectId[]; // Referencia a los usuarios asignados a la tarea
  team: Schema.Types.ObjectId; // Referencia al equipo al que pertenece la tarea
}
