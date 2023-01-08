import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("get exercises api", () => {
  test("can get exercises of a workout", async () => {
    const { app, helpers } = await setupIntegration();

    const { workout } = await helpers.createExercises([{ name: "Bench press" }, { name: "Squat" }]);

    await request(app)
      .get(`/api/v1/workouts/${workout.id}/exercises`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body).toHaveLength(2);
        expect(res.body[0].name).toEqual("Bench press");
        expect(res.body[1].name).toEqual("Squat");
      });
  });
});
