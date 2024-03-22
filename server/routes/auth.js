import express from "express";
import { adminLogin, login, register } from "../controllers/auth.js";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.post("/admin/login", adminLogin);

export default authRoute;
