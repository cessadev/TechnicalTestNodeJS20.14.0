import { model, Schema, Types } from "mongoose";

export interface ITeam {
  name: string;
  members: Types.ObjectId[]; // INFO: Referencia a los usuarios que son miembros del equipo
  tasks: Types.ObjectId[]; // INFO: Referencia a las tareas asignadas al equipo
}

const TeamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
  },
  members: [
    // INFO: Relación muchos a muchos con User
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tasks: [
    // INFO: Relación uno a muchos con Task
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const TeamModel = model<ITeam>("Team", TeamSchema);
