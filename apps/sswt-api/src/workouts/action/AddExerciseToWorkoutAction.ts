import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";

@injectable()
export class AddExerciseToWorkoutAction {
  constructor(
    @inject(TYPES.ExerciseRepository) private readonly exerciseRepository: ExerciseRepository,
    @inject(TYPES.UserContext) private readonly userContext: UserContext
  ) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseName = req.body.name;

    const exercise = await this.exerciseRepository.create(workoutId, exerciseName);

    res.status(201).json({ id: exercise.id });
  }
}
