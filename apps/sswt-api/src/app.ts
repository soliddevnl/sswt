import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authorize } from "src/middleware/authorize";

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "open-api";
import { ProductionServiceContainer, PublicServiceTypes } from "src/container/ServiceContainer";
import { ActionInterface } from "src/workouts/action/ActionInterface";

async function buildApp() {
  dotenv.config();

  const container = new ProductionServiceContainer();

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
    action: PublicServiceTypes;
  }

  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

  const routes: Route[] = [
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets",
      method: "GET",
      action: "getSetsAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets",
      method: "POST",
      action: "addSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId",
      method: "PUT",
      action: "updateSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId/sets/:setId",
      method: "DELETE",
      action: "removeSetAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId",
      method: "DELETE",
      action: "removeExerciseFromWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises",
      method: "GET",
      action: "getExercisesAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises",
      method: "POST",
      action: "addExerciseToWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId/exercises/:exerciseId",
      method: "PUT",
      action: "updateExerciseAction",
    },
    {
      path: "/api/v1/workouts",
      method: "POST",
      action: "createWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId",
      method: "GET",
      action: "getWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId",
      method: "PUT",
      action: "updateWorkoutAction",
    },
    {
      path: "/api/v1/workouts/:workoutId",
      method: "DELETE",
      action: "removeWorkoutAction",
    },
  ];

  for (const route of routes) {
    const method = route.method.toLowerCase() as keyof typeof app;
    app[method](route.path, async (req: Request, res: Response) => {
      const controller = (await container[route.action]()) as ActionInterface;
      await controller.execute(req, res);
    });
  }

  return {
    app,
    container,
  };
}

export { buildApp };
