import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("workouts api", () => {
  test("GET /workouts", async () => {
    const { app } = await setupIntegration();

    await request(app)
      .get("/api/v1/workouts")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200);
  });
});
