import { Request, Response } from "express";

import { ExercisesRepository } from "src/workouts/repository/ExercisesRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class GetExercisesAction implements ActionInterface {
  constructor(private readonly exerciseRepository: ExercisesRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);

    const exercises = await this.exerciseRepository.getExercisesByWorkoutId(workoutId);

    res.json(exercises);
  }
}
