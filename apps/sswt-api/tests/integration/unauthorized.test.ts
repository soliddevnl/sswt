import request from "supertest";
import { buildApp } from "src/app";

describe("unauthorized access", () => {
  async function setup() {
    return {
      app: await buildApp(),
    };
  }

  test("GET /", async () => {
    const { app } = await setup();
    await request(app).get("/api/v1/").set("Accept", "application/json").expect(401);
  });
});
