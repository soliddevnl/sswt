import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("remove exercise from workout api", () => {
  test("can remove an exercise", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout, exercise } = await helpers.createExercise("Bench Press");

    await request(app)
      .delete(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200);
  });
});
