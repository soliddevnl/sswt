import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("update workout api", () => {
  test("can update a workout", async () => {
    const {
      app,
      helpers: { createWorkout },
    } = await setupIntegration();

    const workout = await createWorkout("test workout");

    await request(app)
      .put(`/api/v1/workouts/${workout.id}`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .send({
        name: "My Workout",
        date: "2021-01-01 00:00:00",
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).not.toBeNull();
      });
  });
});
