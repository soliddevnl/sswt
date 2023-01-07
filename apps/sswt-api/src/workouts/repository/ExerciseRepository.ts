import { PrismaClient } from "@prisma/client";
import { injectable, inject } from "inversify";
import TYPES from "src/container/types";
import { createExerciseDto, Exercise } from "src/workouts/dto/Exercise";

@injectable()
export class ExerciseRepository {
  constructor(@inject(TYPES.PrismaClient) private readonly db: PrismaClient) {}

  async create(workoutId: number, name: string): Promise<Exercise> {
    const exercise = await this.db.exercise.create({
      data: {
        name: name,
        workout: {
          connect: {
            id: workoutId,
          },
        },
      },
    });

    return createExerciseDto(exercise);
  }

  async remove(workoutId: number, exerciseId: number): Promise<void> {
    await this.db.exercise.deleteMany({
      where: {
        id: exerciseId,
        workoutId: workoutId,
      },
    });
  }
}
