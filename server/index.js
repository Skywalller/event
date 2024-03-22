import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";
import config from "./config/config.js";
import authRoute from "./routes/auth.js";
import eventRoute from "./routes/event.js";

async function init() {
  const httpServer = http.createServer(app);
  app.get("/", (req, res) => res.send("Server running"));
  app.use("/auth", authRoute);
  app.use("/event", eventRoute);
  connectDb(process.env.MONGO || config.MONGO || "mongodb://127.0.0.1:27017/Eventy");
  httpServer.listen(process.env.PORT || 5000, () =>
    console.log("Server running on port", process.env.PORT || 5000)
  );
}

init();
