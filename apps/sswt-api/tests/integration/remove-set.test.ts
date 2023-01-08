import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("remove set api", () => {
  test("can remove a set", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout, exercise, set } = await helpers.createSet(10, 8825);

    await request(app)
      .delete(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}/sets/${set.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200);
  });
});
