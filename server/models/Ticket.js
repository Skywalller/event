import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    name: String,
    email: String,
    reached: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "Ticket",
  }
);

export default mongoose.model("Ticket", ticketSchema);
