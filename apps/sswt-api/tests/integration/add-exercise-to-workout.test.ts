import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("add exercise to workout api", () => {
  test("can create an exercise", async () => {
    const { app, helpers } = await setupIntegration();

    const workout = await helpers.createWorkout("workout 1");

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
