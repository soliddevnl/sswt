import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("get workouts api", () => {
  test("GET /workout", async () => {
    const { app, helpers } = await setupIntegration();

    const workout = await helpers.createWorkout("test workout");

    await request(app)
      .get(`/api/v1/workouts/${workout.id}`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.name).toEqual("test workout");
      });
  });
});
