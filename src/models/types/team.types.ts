import { Schema, Document } from "mongoose";

export interface ITeam extends Document {
  name: string;
  members: Schema.Types.ObjectId[]; // Referencia a los usuarios que son miembros del equipo
  tasks: Schema.Types.ObjectId[]; // Referencia a las tareas asignadas al equipo
}