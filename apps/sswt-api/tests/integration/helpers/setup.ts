import { buildApp } from "src/app";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { Workout } from "src/workouts/dto/Workout";
import { Exercise } from "src/workouts/dto/Exercise";
import { Set } from "src/workouts/dto/Set";
import { SetRepository } from "src/workouts/repository/SetRepository";

export interface IntegrationTestHelpers {
  createWorkout: (name: string) => Promise<Workout>;
  createExercise: (name: string) => Promise<{ workout: Workout; exercise: Exercise }>;
  createSet: (reps: number, weight: number) => Promise<{ workout: Workout; exercise: Exercise; set: Set }>;
}

export async function setupIntegration() {
  const { app, container } = await buildApp();

  const workoutRepository = container.get<WorkoutRepository>(TYPES.WorkoutRepository);
  const exerciseRepository = container.get<ExerciseRepository>(TYPES.ExerciseRepository);
  const setRepository = container.get<SetRepository>(TYPES.SetRepository);

  const userContext = container.get<UserContext>(TYPES.UserContext);

  const helpers: IntegrationTestHelpers = {
    async createWorkout(name: string) {
      return workoutRepository.create(name, new Date(), await userContext.getUserId());
    },
    async createExercise(name: string): Promise<{ workout: Workout; exercise: Exercise }> {
      const workout = await this.createWorkout("test workout");
      const exercise = await exerciseRepository.create(workout.id, name);
      return { workout, exercise };
    },
    async createSet(reps: number, weight: number): Promise<{ workout: Workout; exercise: Exercise; set: Set }> {
      const workout = await this.createWorkout("test workout");
      const { exercise } = await this.createExercise("Bench press");
      const set = await setRepository.create(exercise.id, reps, weight);
      return { workout, exercise, set };
    },
  };

  return {
    app,
    helpers,
  };
}
