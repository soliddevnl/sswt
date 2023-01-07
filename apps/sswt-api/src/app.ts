import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "open-api";
import container from "src/container/inversify.config";
import { CreateWorkoutAction } from "src/workouts/action/CreateWorkoutAction";
import TYPES from "src/container/types";

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

  app.post("/api/v1/workouts", async (req: Request, res: Response) => {
    const controller = container.get<CreateWorkoutAction>(TYPES.CreateWorkoutAction);
    await controller.execute(req, res);
  });

  return app;
}

export { buildApp };
