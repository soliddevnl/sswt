import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("update set api", () => {
  test("can update a set", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout, exercise, set } = await helpers.createSet(10, 100);

    await request(app)
      .put(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}/sets/${set.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        reps: 10,
        weight: 100,
      })
      .expect(200);
  });
});
