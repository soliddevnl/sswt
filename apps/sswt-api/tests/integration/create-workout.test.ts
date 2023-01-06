import request from "supertest";
import { buildApp } from "src/app";

describe("create workouts api", () => {
  async function setup() {
    return {
      app: await buildApp(),
    };
  }

  test("can create a workout", async () => {
    const { app } = await setup();
    await request(app)
      .post("/api/workouts")
      .set("Accept", "application/json")
      .send({
        name: "My Workout",
        date: "2021-01-01 00:00:00",
      })
      .expect(200);
  });
});
