import { PrismaClient } from "@prisma/client";
import { injectable, inject } from "inversify";
import TYPES from "src/container/types";
import { Workout } from "src/workouts/model/Workout";

@injectable()
export class WorkoutRepository {
  constructor(@inject(TYPES.PrismaClient) private readonly db: PrismaClient) {}

  async create(workout: Workout) {
    return this.db.workout.create({
      data: {
        name: workout.name,
        date: workout.date,
        user: {
          connect: {
            id: workout.userId,
          },
        },
      },
    });
  }
}
