import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "open-api";
import TYPES from "src/container/types";
import container from "src/container/inversify.config";
import { ActionInterface } from "src/workouts/action/ActionInterface";

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

  interface Route {
    path: string;
    method: HttpMethod;
    action: keyof typeof TYPES;
  }

  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

  const routes: Route[] = [
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets",
      method: "GET",
      action: "GetSetsAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets",
      method: "POST",
      action: "AddSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId",
      method: "PUT",
      action: "UpdateSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId",
      method: "DELETE",
      action: "RemoveSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId",
      method: "DELETE",
      action: "RemoveExerciseFromWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises",
      method: "GET",
      action: "GetExercisesAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises",
      method: "POST",
      action: "AddExerciseToWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId",
      method: "PUT",
      action: "UpdateExerciseAction",
    },
    {
      path: "/api/v1/workouts",
      method: "POST",
      action: "CreateWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId",
      method: "PUT",
      action: "UpdateWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId",
      method: "DELETE",
      action: "RemoveWorkoutAction",
    },
  ];

  for (const route of routes) {
    const method = route.method.toLowerCase() as keyof typeof app;
    app[method](route.path, async (req: Request, res: Response) => {
      const controller = container.get<ActionInterface>(TYPES[route.action]);
      await controller.execute(req, res);
    });
  }

  return {
    app,
    container,
  };
}

export { buildApp };
