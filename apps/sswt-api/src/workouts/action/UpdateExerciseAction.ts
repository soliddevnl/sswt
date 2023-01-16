import { Request, Response } from "express";

import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class UpdateExerciseAction implements ActionInterface {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseId = parseInt(req.params.exerciseId);
    const exerciseName = req.body.name;

    const exercise = await this.exerciseRepository.update(workoutId, exerciseId, exerciseName);

    res.status(200).json(exercise);
  }
}
