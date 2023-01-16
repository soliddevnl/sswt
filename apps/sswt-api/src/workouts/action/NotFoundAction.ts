import { Request, Response } from "express";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class NotFoundAction implements ActionInterface {
  async execute(req: Request, res: Response) {
    res.status(404).json({ msg: "Not Found" });
  }
}
