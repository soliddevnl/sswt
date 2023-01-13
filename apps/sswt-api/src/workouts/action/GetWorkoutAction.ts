import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

@injectable()
export class GetWorkoutAction implements ActionInterface {
  constructor(@inject(TYPES.WorkoutRepository) private readonly workoutRepository: WorkoutRepository) {}

  async execute(req: Request, res: Response) {
    const { workoutId } = req.params;

    const workout = await this.workoutRepository.find(Number(workoutId));
    res.json(workout);
  }
}
