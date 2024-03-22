import jwt from "jsonwebtoken";
import config from "../config/config.js";

export default function generateToken(user) {
  const token = jwt.sign({ _id: user._id }, config.TOKEN || process.env.TOKEN);
  return token;
}
