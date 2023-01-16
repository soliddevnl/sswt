import { Request, Response } from "express";

import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class RemoveWorkoutAction implements ActionInterface {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);

    const updatedWorkout = await this.workoutRepository.remove(workoutId);
    res.json(updatedWorkout);
  }
}
