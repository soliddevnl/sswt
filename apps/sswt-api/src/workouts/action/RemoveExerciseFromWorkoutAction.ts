import { Request, Response } from "express";

import { ExercisesRepository } from "src/workouts/repository/ExercisesRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class RemoveExerciseFromWorkoutAction implements ActionInterface {
  constructor(private readonly exerciseRepository: ExercisesRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseId = parseInt(req.params.exerciseId);

    await this.exerciseRepository.remove(workoutId, exerciseId);

    res.sendStatus(200);
  }
}
