import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    isOrganization: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.isPasswordValid = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
