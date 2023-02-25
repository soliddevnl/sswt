import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("hello world api", () => {
  test("GET /api/v1/hello", async () => {
    const { app } = await setupIntegration();

    await request(app)
      .get(`/api/v1/hello?name=John Doe`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer 123")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body).toEqual({ message: "Hello, John Doe!" });
      });
  });
});
