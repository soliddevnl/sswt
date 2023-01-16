import { Request, Response } from "express";

import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class GetWorkoutAction implements ActionInterface {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(req: Request, res: Response) {
    const { workoutId } = req.params;

    const workout = await this.workoutRepository.find(Number(workoutId));
    res.json(workout);
  }
}
