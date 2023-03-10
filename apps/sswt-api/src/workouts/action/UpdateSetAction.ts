import { Request, Response } from "express";

import { SetRepository } from "src/workouts/repository/SetRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class UpdateSetAction implements ActionInterface {
  constructor(private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const setId = parseInt(req.params.setId);
    const { reps, weight } = req.body;

    const set = await this.setRepository.update(setId, reps, weight);

    res.status(200).json(set);
  }
}
