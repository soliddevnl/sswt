import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";
import { createWorkoutController } from "src/workouts/controller/createWorkoutController";

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "open-api";

async function buildApp() {
  dotenv.config();

  const app: Express = express();
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(authorize);
  app.use(bodyParser.json());

  app.get("/api/v1/", (req: Request, res: Response) => {
    res.json({ msg: "Hello World, Soliddev!" });
  });

  app.get("/api/v1/workouts", (req: Request, res: Response) => {
    res.json([]);
  });

  app.post("/api/v1/workouts", createWorkoutController);

  return app;
}

export { buildApp };
