import { Request, Response } from "express";
import { injectable } from "inversify";
import { ActionInterface } from "src/workouts/action/ActionInterface";

@injectable()
export class NotFoundAction implements ActionInterface {
  async execute(req: Request, res: Response) {
    res.status(404).json({ msg: "Not Found" });
  }
}
