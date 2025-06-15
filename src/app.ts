import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth";
import trackingRoutes from "./routes/tracking";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/components", trackingRoutes);

app.get("/api/health", (_, res) => res.status(200).json({ status: "ok" }));

export default app;
