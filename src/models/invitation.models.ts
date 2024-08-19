import { model, Schema } from "mongoose";
import { IInvitation } from "./types/invitation.types";

const InvitationSchema = new Schema<IInvitation>({
  email: {
    type: String,
    required: true,
  },
  team: {
    // Relación muchos a uno con Team
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  }, 
  invitedBy: {
    // Relación muchos a uno con User
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, 
  status: {
    type: String,
    enum: ["Pendiente", "Aceptada", "Rechazada"],
    default: "Pendiente"
  }
});

export const InvitationModel = model<IInvitation>('Invitation', InvitationSchema);
