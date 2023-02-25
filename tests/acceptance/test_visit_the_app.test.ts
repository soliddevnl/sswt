import { AcceptanceTestCase } from "./dsl/AcceptanceTestCase";
import { fixture } from "testcafe";

fixture("Visit the app").page("http://localhost:3000");

test("should visit the app", async () => {
  const testCase = new AcceptanceTestCase();
  await testCase.workoutTracker.visitTheApp();
  await testCase.workoutTracker.confirmTheAppIsOpen();
  await testCase.workoutTracker.confirmTheWelcomeMessageFromTheApiIsShown();
});
