import { model, Schema, Types } from "mongoose";

export interface IInvitation {
  email: string;
  team: Types.ObjectId; // INFO: Referencia al equipo al que se invita
  invitedBy: Types.ObjectId; // INFO: Referencia al usuario que envió la invitación
  status: "Pending" | "Acepted" | "Rejected";
}

const InvitationSchema = new Schema<IInvitation>({
  email: {
    type: String,
    required: true,
  },
  team: {
    // INFO: Relación muchos a uno con Team
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  }, 
  invitedBy: {
    // INFO: Relación muchos a uno con User
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, 
  status: {
    type: String,
    enum: ["Pending", "Acepted", "Rejected"],
    default: "Pending"
  }
});

export const InvitationModel = model<IInvitation>('Invitation', InvitationSchema);
