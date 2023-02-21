import { t, fixture, Selector } from "testcafe";

export class WebTrackerProtocolDriver {
  async visitTheApp() {
    await t.openWindow("http://localhost:3000");
  }

  async confirmTheAppIsOpen() {
    const pageTitle = await Selector("title").textContent;
    await t.expect(pageTitle).eql("Super Simple Workout Tracker");
  }
}
