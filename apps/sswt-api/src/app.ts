import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";
import { createWorkoutController } from "src/workouts/controller/createWorkoutController";

import bodyParser from "body-parser";

async function buildApp() {
  dotenv.config();

  const app: Express = express();
  app.use(authorize);
  app.use(bodyParser.json());

  app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "Hello World, Soliddev!" });
  });

  app.get("/api/workouts", (req: Request, res: Response) => {
    res.json([]);
  });

  app.post("/api/workouts", createWorkoutController);

  return app;
}

export { buildApp };
