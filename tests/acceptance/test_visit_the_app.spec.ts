import { AcceptanceTestCase } from "./dsl/AcceptanceTestCase";

describe("Visit the app", () => {
  it("should visit the app", async () => {
    const testCase = new AcceptanceTestCase();
    await testCase.workoutTracker.visitTheApp();
    await testCase.workoutTracker.confirmTheAppIsOpen();
  });
});
