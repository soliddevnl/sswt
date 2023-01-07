import { Exercise as ExerciseModel } from "@prisma/client";

export interface Exercise {
  id: number;
  name: string;
}

export function createExerciseDto(exercise: ExerciseModel): Exercise {
  return {
    id: exercise.id,
    name: exercise.name,
  };
}
