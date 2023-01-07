import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { SetRepository } from "src/workouts/repository/SetRepository";

@injectable()
export class AddSetAction {
  constructor(@inject(TYPES.SetRepository) private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const exerciseId = parseInt(req.params.exerciseId);
    const { weight, reps } = req.body;

    const set = await this.setRepository.create(exerciseId, reps, weight);

    res.status(201).json(set);
  }
}
