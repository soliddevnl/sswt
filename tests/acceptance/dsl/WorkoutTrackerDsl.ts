import { WebTrackerProtocolDriver } from "./WebTrackerProtocolDriver";

export class WorkoutTrackerDsl {
  private driver = new WebTrackerProtocolDriver();

  async visitTheApp() {
    await this.driver.visitTheApp();
  }

  async confirmTheAppIsOpen() {
    await this.driver.confirmTheAppIsOpen();
  }

  async confirmTheWelcomeMessageFromTheApiIsShown() {
    await this.driver.confirmTheWelcomeMessageFromTheApiIsShown();
  }
}
