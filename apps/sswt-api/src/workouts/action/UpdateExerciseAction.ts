import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";

@injectable()
export class UpdateExerciseAction {
  constructor(@inject(TYPES.ExerciseRepository) private readonly exerciseRepository: ExerciseRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseId = parseInt(req.params.exerciseId);
    const exerciseName = req.body.name;

    const exercise = await this.exerciseRepository.update(workoutId, exerciseId, exerciseName);

    res.status(200).json(exercise);
  }
}
