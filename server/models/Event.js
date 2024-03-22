import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: { city: String, address: String },
    time: { from: String, to: String, details: String },
    date: { from: String, to: String, details: String },
    descriptiom: String,
    link: String,
    ageLimit: String,
    price: String,
    initialTickets: { type: Number, default: 1 },
    ticketsSold: { type: Number, default: 0 },
    tax: String,
    discount: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discount" }],
  },
  {
    timestamps: true,
    collection: "Event",
  }
);

export default mongoose.model("Event", eventSchema);
