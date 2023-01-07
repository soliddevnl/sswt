import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";

@injectable()
export class RemoveExerciseFromWorkoutAction {
  constructor(@inject(TYPES.ExerciseRepository) private readonly exerciseRepository: ExerciseRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseId = parseInt(req.params.exerciseId);

    await this.exerciseRepository.remove(workoutId, exerciseId);

    res.sendStatus(200);
  }
}
