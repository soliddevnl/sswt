import { Request, Response } from "express";

import { SetRepository } from "src/workouts/repository/SetRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class AddSetAction implements ActionInterface {
  constructor(private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const exerciseId = parseInt(req.params.exerciseId);
    const { weight, reps } = req.body;

    const set = await this.setRepository.create(exerciseId, reps, weight);

    res.status(201).json(set);
  }
}
