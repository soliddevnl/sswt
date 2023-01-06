import request from "supertest";
import { buildApp } from "src/app";

describe("workouts api", () => {
  async function setup() {
    return {
      app: await buildApp(),
    };
  }

  test("GET /workouts", async () => {
    const { app } = await setup();
    await request(app)
      .get("/api/workouts")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200);
  });
});
