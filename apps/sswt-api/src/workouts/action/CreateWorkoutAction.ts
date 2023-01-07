import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { UserContext } from "src/workouts/context/UserContext";
import { Workout } from "src/workouts/model/Workout";

@injectable()
export class CreateWorkoutAction {
  constructor(
    @inject(TYPES.WorkoutRepository) private readonly workoutRepository: WorkoutRepository,
    @inject(TYPES.UserContext) private readonly userContext: UserContext
  ) {}

  async execute(req: Request, res: Response) {
    const { name, date } = req.body;
    const userId = await this.userContext.getUserId();

    const workout = new Workout(null, name, new Date(date), userId);

    const createdWorkout = await this.workoutRepository.create(workout);
    res.json(createdWorkout);
  }
}
