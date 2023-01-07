import request from "supertest";
import { buildApp } from "src/app";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { SetRepository } from "src/workouts/repository/SetRepository";

describe("update set api", () => {
  async function setup() {
    const { app, container } = await buildApp();

    return {
      app: app,
      container: container,
    };
  }

  test("can update a set", async () => {
    const { app, container } = await setup();
    const workoutRepository = container.get<WorkoutRepository>(TYPES.WorkoutRepository);
    const exerciseRepository = container.get<ExerciseRepository>(TYPES.ExerciseRepository);
    const setRepository = container.get<SetRepository>(TYPES.SetRepository);
    const userContext = container.get<UserContext>(TYPES.UserContext);

    const workout = await workoutRepository.create("test workout", new Date(), await userContext.getUserId());
    const exercise = await exerciseRepository.create(workout.id, "Bench press");
    const set = await setRepository.create(exercise.id, 10, 8825);

    await request(app)
      .put(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}/sets/${set.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        reps: 10,
        weight: 100,
      })
      .expect(201);
  });
});
