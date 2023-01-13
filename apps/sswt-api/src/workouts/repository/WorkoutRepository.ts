import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import TYPES from "src/container/types";
import { Workout } from "src/workouts/dto/Workout";
import { createWorkoutDto } from "src/workouts/dto/Workout";

@injectable()
export class WorkoutRepository {
  constructor(@inject(TYPES.PrismaClient) private readonly db: PrismaClient) {}

  async find(workoutId: number): Promise<Workout> {
    const workout = await this.db.workout.findUnique({
      where: {
        id: workoutId,
      },
    });

    if (!workout) {
      throw new Error("Workout not found");
    }

    return createWorkoutDto(workout);
  }

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

  async update(workoutId: number, name: string, date: Date): Promise<Workout> {
    const workout = await this.db.workout.update({
      where: {
        id: workoutId,
      },
      data: {
        name: name,
        date: date,
      },
    });

    return createWorkoutDto(workout);
  }

  async remove(workoutId: number): Promise<void> {
    await this.db.workout.delete({
      where: {
        id: workoutId,
      },
    });
  }
}
