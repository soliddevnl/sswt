import { Request, Response } from "express";

import { SetRepository } from "src/workouts/repository/SetRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class RemoveSetAction implements ActionInterface {
  constructor(private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const setId = parseInt(req.params.setId);

    const set = await this.setRepository.remove(setId);

    res.status(200).json(set);
  }
}
