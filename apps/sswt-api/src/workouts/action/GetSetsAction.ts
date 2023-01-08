import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { SetRepository } from "src/workouts/repository/SetRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

@injectable()
export class GetSetsAction implements ActionInterface {
  constructor(@inject(TYPES.SetRepository) private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const exerciseId = parseInt(req.params.exerciseId);

    const sets = await this.setRepository.findAllForExercise(exerciseId);

    res.status(200).json(sets);
  }
}
