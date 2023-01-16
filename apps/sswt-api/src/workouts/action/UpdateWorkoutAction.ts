import { Request, Response } from "express";

import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { ActionInterface } from "src/workouts/action/ActionInterface";

export class UpdateWorkoutAction implements ActionInterface {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(req: Request, res: Response) {
    const workoutId = parseInt(req.params.workoutId);
    const { name, date } = req.body;

    const updatedWorkout = await this.workoutRepository.update(workoutId, name, new Date(date));
    res.json(updatedWorkout);
  }
}
