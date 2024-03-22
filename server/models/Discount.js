import mongoose from "mongoose";

const discountSchema = new mongoose.Schema(
  {
    percent: String,
    code: String,
  },
  {
    timestamps: true,
    collection: "Discount",
  }
);

export default mongoose.model("Discount", discountSchema);
