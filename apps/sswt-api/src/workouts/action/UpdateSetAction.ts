import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { SetRepository } from "src/workouts/repository/SetRepository";

@injectable()
export class UpdateSetAction {
  constructor(@inject(TYPES.SetRepository) private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const setId = parseInt(req.params.setId);
    const { reps, weight } = req.body;

    const set = await this.setRepository.update(setId, reps, weight);

    res.status(201).json(set);
  }
}
