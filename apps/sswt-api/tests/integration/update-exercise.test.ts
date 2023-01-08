import request from "supertest";
import { setupIntegration } from "tests/integration/helpers/setup";

describe("update exercise api", () => {
  test("can update an exercise", async () => {
    const { app, helpers } = await setupIntegration();

    const workout = await helpers.createWorkout("Workout of the day");
    const exercise = await helpers.createExercise(workout.id, "Bench press");

    await request(app)
      .put(`/api/v1/workouts/${workout.id}/exercises/${exercise.id}`)
      .set("Authorization", "Bearer 123")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Bench Press",
      })
      .expect(200);
  });
});
