import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

async function buildApp() {
  dotenv.config();

  const app: Express = express();

  app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "Hello World, Soliddev!" });
  });

  app.get("/api/workouts", (req: Request, res: Response) => {
    res.json([]);
  });

  return app;
}

export { buildApp };
