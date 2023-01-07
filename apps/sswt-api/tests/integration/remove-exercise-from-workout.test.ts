import request from "supertest";
import { buildApp } from "src/app";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";

describe("remove exercise from workout api", () => {
  async function setup() {
    const { app, container } = await buildApp();

    return {
      app: app,
      container: container,
    };
  }

  test("can remove an exercise", async () => {
    const { app, container } = await setup();
    const workoutRepository = container.get<WorkoutRepository>(TYPES.WorkoutRepository);
    const exerciseRepository = container.get<ExerciseRepository>(TYPES.ExerciseRepository);
    const userContext = container.get<UserContext>(TYPES.UserContext);

    const workout = await workoutRepository.create("test workout", new Date(), await userContext.getUserId());

    const exercise = await exerciseRepository.create(workout.id, "Bench Press");

    await request(app)
      .delete(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200);
  });
});
