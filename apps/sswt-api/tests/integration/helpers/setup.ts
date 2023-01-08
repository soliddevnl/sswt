import { buildApp } from "src/app";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";

export async function setupIntegration() {
  const { app, container } = await buildApp();

  const userContext = container.get<UserContext>(TYPES.UserContext);

  return {
    app: app,
    container: container,
    helpers: {
      createWorkout: async (name: string) => {
        return container
          .get<WorkoutRepository>(TYPES.WorkoutRepository)
          .create(name, new Date(), await userContext.getUserId());
      },
      createExercise: async (workoutId: number, name: string) => {
        return container.get<ExerciseRepository>(TYPES.ExerciseRepository).create(workoutId, name);
      },
    },
  };
}
