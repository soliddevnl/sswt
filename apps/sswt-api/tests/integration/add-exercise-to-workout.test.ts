import request from "supertest";
import { buildApp } from "src/app";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import TYPES from "src/container/types";
import { UserContext } from "src/workouts/context/UserContext";

describe("add exercise to workout api", () => {
  async function setup() {
    const { app, container } = await buildApp();

    return {
      app: app,
      container: container,
    };
  }

  test("can create an exercise", async () => {
    const { app, container } = await setup();
    const workoutRepository = container.get<WorkoutRepository>(TYPES.WorkoutRepository);
    const userContext = container.get<UserContext>(TYPES.UserContext);

    const workout = await workoutRepository.create("test workout", new Date(), await userContext.getUserId());

    await request(app)
      .post(`/api/v1/workouts/${workout.id}/exercises`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Bench Press",
      })
      .expect(201);
  });
});
