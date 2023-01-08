import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("get sets api", () => {
  test("can get all sets of an exercise", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout, exercise } = await helpers.createSets([
      { reps: 5, weight: 10000 },
      { reps: 5, weight: 12000 },
    ]);

    await request(app)
      .get(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}/sets`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.length).toBe(2);
      });
  });
});
