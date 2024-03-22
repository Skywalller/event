import express from "express";
import { create, remove } from "../controllers/event.js";
import verifyToken from "../middleware/verifyToken.js";

const eventRoute = express.Router();

eventRoute.use("/", verifyToken).post(create).delete(remove);

export default eventRoute;
