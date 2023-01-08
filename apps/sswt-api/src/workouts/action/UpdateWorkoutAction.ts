import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { UserContext } from "src/workouts/context/UserContext";
import { ActionInterface } from "src/workouts/action/ActionInterface";

@injectable()
export class UpdateWorkoutAction implements ActionInterface {
  constructor(
    @inject(TYPES.WorkoutRepository) private readonly workoutRepository: WorkoutRepository,
    @inject(TYPES.UserContext) private readonly userContext: UserContext
  ) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const { name, date } = req.body;

    const updatedWorkout = await this.workoutRepository.update(workoutId, name, new Date(date));
    res.json(updatedWorkout);
  }
}
