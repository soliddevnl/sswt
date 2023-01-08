import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("create workouts api", () => {
  test("can create a workout", async () => {
    const { app } = await setupIntegration();

    await request(app)
      .post("/api/v1/workouts")
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

  test("unauthorized", async () => {
    const { app } = await setupIntegration();
    await request(app).post("/api/v1/workouts").set("Accept", "application/json").expect(401);
  });
});
