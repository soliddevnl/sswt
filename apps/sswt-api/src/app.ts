import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";

async function buildApp() {
  dotenv.config();

  const app: Express = express();
  app.use(authorize);

  app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "Hello World, Soliddev!" });
  });

  app.get("/api/workouts", (req: Request, res: Response) => {
    res.json([]);
  });

  app.post("/api/workouts", (req: Request, res: Response) => {
    res.json({ id: 1, name: "My Workout", date: "2021-01-01 00:00:00" });
  });

  return app;
}

export { buildApp };
