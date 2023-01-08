import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("remove workout api", () => {
  test("can remove a workout", async () => {
    const {
      app,
      helpers: { createWorkout },
    } = await setupIntegration();

    const workout = await createWorkout("test workout");

    await request(app)
      .delete(`/api/v1/workouts/${workout.id}`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200);
  });
});
