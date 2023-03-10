import { Request, Response } from "express";

import { ExercisesRepository } from "src/workouts/repository/ExercisesRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class AddExerciseToWorkoutAction implements ActionInterface {
  constructor(private readonly exerciseRepository: ExercisesRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const exerciseName = req.body.name;

    const exercise = await this.exerciseRepository.create(workoutId, exerciseName);

    res.status(201).json({ id: exercise.id });
  }
}
