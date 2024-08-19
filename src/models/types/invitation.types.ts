import { Document, Schema } from "mongoose";

export interface IInvitation extends Document {
  email: string;
  team: Schema.Types.ObjectId; // Referencia al equipo al que se invita
  invitedBy: Schema.Types.ObjectId; // Referencia al usuario que envió la invitación
  status: "Pendiente" | "Aceptada" | "Rechazada";
}
