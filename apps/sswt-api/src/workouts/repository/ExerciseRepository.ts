import { PrismaClient } from "@prisma/client";
import { createExerciseDto, Exercise } from "src/workouts/dto/Exercise";

export class ExerciseRepository {
  constructor(private readonly db: PrismaClient) {}

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

  async update(workoutId: number, exerciseId: number, exerciseName: string): Promise<Exercise> {
    const exercise = await this.db.exercise.update({
      where: {
        id: exerciseId,
      },
      data: {
        name: exerciseName,
      },
    });

    return createExerciseDto(exercise);
  }

  async getExercisesByWorkoutId(workoutId: number): Promise<Exercise[]> {
    const exercises = await this.db.exercise.findMany({
      where: {
        workoutId: workoutId,
      },
    });

    return exercises.map(createExerciseDto);
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
