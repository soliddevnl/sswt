import { Request, Response } from "express";

export function createWorkoutController(req: Request, res: Response) {
  const { name, date } = req.body;

  res.json({ id: 1, name: name, date: date });
}
