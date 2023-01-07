import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import TYPES from "src/container/types";
import { Workout } from "src/workouts/dto/Workout";
import { createWorkoutDto } from "src/workouts/dto/Workout";

@injectable()
export class WorkoutRepository {
  constructor(@inject(TYPES.PrismaClient) private readonly db: PrismaClient) {}

  async create(name: string, date: Date, userId: number): Promise<Workout> {
    const workout = await this.db.workout.create({
      data: {
        name: name,
        date: date,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return createWorkoutDto(workout);
  }
}
