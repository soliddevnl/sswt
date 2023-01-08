import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("unauthorized access", () => {
  test("GET /", async () => {
    const { app } = await setupIntegration();

    await request(app).get("/api/v1/").set("Accept", "application/json").expect(401);
  });
});
