import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "open-api";
import TYPES from "src/container/types";
import container from "src/container/inversify.config";

import { CreateWorkoutAction } from "src/workouts/action/CreateWorkoutAction";
import { AddExerciseToWorkoutAction } from "src/workouts/action/AddExerciseToWorkoutAction";
import { RemoveExerciseFromWorkoutAction } from "src/workouts/action/RemoveExerciseFromWorkoutAction";
import { UpdateSetAction } from "src/workouts/action/UpdateSetAction";
import { AddSetAction } from "src/workouts/action/AddSetAction";
import { RemoveSetAction } from "src/workouts/action/RemoveSetAction";

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

  app.post("/api/v1/workouts/:workoutId/exercises/:exerciseId/sets", async (req: Request, res: Response) => {
    const controller = container.get<AddSetAction>(TYPES.AddSetAction);
    await controller.execute(req, res);
  });

  app.put("/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId", async (req: Request, res: Response) => {
    const controller = container.get<UpdateSetAction>(TYPES.UpdateSetAction);
    await controller.execute(req, res);
  });

  app.delete("/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId", async (req: Request, res: Response) => {
    const controller = container.get<RemoveSetAction>(TYPES.RemoveSetAction);
    await controller.execute(req, res);
  });

  app.delete("/api/v1/workouts/:workoutId/exercises/:exerciseId", async (req: Request, res: Response) => {
    const controller = container.get<RemoveExerciseFromWorkoutAction>(TYPES.RemoveExerciseFromWorkoutAction);
    await controller.execute(req, res);
  });

  app.post("/api/v1/workouts/:workoutId/exercises", async (req: Request, res: Response) => {
    const controller = container.get<AddExerciseToWorkoutAction>(TYPES.AddExerciseToWorkoutAction);
    await controller.execute(req, res);
  });

  app.post("/api/v1/workouts", async (req: Request, res: Response) => {
    const controller = container.get<CreateWorkoutAction>(TYPES.CreateWorkoutAction);
    await controller.execute(req, res);
  });

  return {
    app,
    container,
  };
}

export { buildApp };
