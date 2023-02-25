import { Request, Response } from "express";

import { ActionInterface } from "src/workouts/action/ActionInterface";

export class HelloAction implements ActionInterface {
  async execute(req: Request, res: Response) {
    const name = req.query.name;
    res.status(200).json({ message: `Hello, ${name}!` });
  }
}
