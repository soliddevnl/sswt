import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";

@injectable()
export class RemoveWorkoutAction {
  constructor(@inject(TYPES.WorkoutRepository) private readonly workoutRepository: WorkoutRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);

    const updatedWorkout = await this.workoutRepository.remove(workoutId);
    res.json(updatedWorkout);
  }
}
