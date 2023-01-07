import request from "supertest";
import { buildApp } from "src/app";

describe("workouts api", () => {
  async function setup() {
    const { app, container } = await buildApp();

    return {
      app: app,
      container: container,
    };
  }

  test("GET /workouts", async () => {
    const { app } = await setup();
    await request(app)
      .get("/api/v1/workouts")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200);
  });
});
