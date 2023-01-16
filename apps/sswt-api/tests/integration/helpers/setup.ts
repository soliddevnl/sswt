import { buildApp } from "src/app";
import { Workout } from "src/workouts/dto/Workout";
import { Exercise } from "src/workouts/dto/Exercise";
import { Set } from "src/workouts/dto/Set";

export interface IntegrationTestHelpers {
  createWorkout: (name: string) => Promise<Workout>;
  createExercise: (name: string) => Promise<{ workout: Workout; exercise: Exercise }>;
  createExercises: (exercises: { name: string }[]) => Promise<{ workout: Workout; exercises: Exercise[] }>;
  createSet: (reps: number, weight: number) => Promise<{ workout: Workout; exercise: Exercise; set: Set }>;
  createSets: (
    sets: { reps: number; weight: number }[]
  ) => Promise<{ workout: Workout; exercise: Exercise; sets: Set[] }>;
}

export async function setupIntegration() {
  const { app, container } = await buildApp();

  const workoutRepository = await container.workoutRepository();
  const exerciseRepository = await container.exerciseRepository();
  const setRepository = await container.setRepository();

  const userContext = await container.userContext();

  const helpers: IntegrationTestHelpers = {
    async createWorkout(name: string) {
      return workoutRepository.create(name, new Date(), await userContext.getUserId());
    },
    async createExercise(name: string): Promise<{ workout: Workout; exercise: Exercise }> {
      const workout = await this.createWorkout("test workout");
      const exercise = await exerciseRepository.create(workout.id, name);
      return { workout, exercise };
    },
    async createExercises(exercises: { name: string }[]): Promise<{ workout: Workout; exercises: Exercise[] }> {
      const workout = await this.createWorkout("test workout");

      const createdExercises = [];
      for (const exercise of exercises) {
        const createdExercise = await exerciseRepository.create(workout.id, exercise.name);
        createdExercises.push(createdExercise);
      }

      return { workout, exercises: createdExercises };
    },
    async createSet(reps: number, weight: number): Promise<{ workout: Workout; exercise: Exercise; set: Set }> {
      const workout = await this.createWorkout("test workout");
      const { exercise } = await this.createExercise("Bench press");
      const set = await setRepository.create(exercise.id, reps, weight);
      return { workout, exercise, set };
    },
    async createSets(
      sets: { reps: number; weight: number }[]
    ): Promise<{ workout: Workout; exercise: Exercise; sets: Set[] }> {
      const workout = await this.createWorkout("test workout");
      const { exercise } = await this.createExercise("Bench press");
      const createdSets = await Promise.all(sets.map((set) => setRepository.create(exercise.id, set.reps, set.weight)));
      return { workout, exercise, sets: createdSets };
    },
  };

  return {
    app,
    helpers,
  };
}
