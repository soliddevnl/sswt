import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

@injectable()
export class RemoveExerciseFromWorkoutAction implements ActionInterface {
  constructor(@inject(TYPES.ExerciseRepository) private readonly exerciseRepository: ExerciseRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseId = parseInt(req.params.exerciseId);

    await this.exerciseRepository.remove(workoutId, exerciseId);

    res.sendStatus(200);
  }
}
