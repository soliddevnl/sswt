import { Workout as WorkoutModel } from "@prisma/client";

export interface Workout {
  id: number;
  name: string;
  date: string;
}

export function createWorkoutDto(model: WorkoutModel): Workout {
  return {
    id: model.id,
    name: model.name,
    date: model.date.toJSON(),
  };
}
