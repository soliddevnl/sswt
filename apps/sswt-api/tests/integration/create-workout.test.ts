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
      .post("/api/v1/workouts")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .send({
        name: "My Workout",
        date: "2021-01-01 00:00:00",
      })
      .expect(200)
      .expect({
        id: 1,
        name: "My Workout",
        date: "2021-01-01 00:00:00",
      });
  });

  test("unauthorized", async () => {
    const { app } = await setup();
    await request(app)
      .post("/api/v1/workouts")
      .set("Accept", "application/json")
      .expect(401);
  });
});
