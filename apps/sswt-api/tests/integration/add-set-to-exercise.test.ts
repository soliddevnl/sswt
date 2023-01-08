import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("add set to exercise api", () => {
  test("can add a set to an exercise", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout, exercise } = await helpers.createExercise("Bench press");

    await request(app)
      .post(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}/sets`)
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
