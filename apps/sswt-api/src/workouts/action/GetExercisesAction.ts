import { Request, Response } from "express";

import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class GetExercisesAction implements ActionInterface {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);

    const exercises = await this.exerciseRepository.getExercisesByWorkoutId(workoutId);

    res.json(exercises);
  }
}
