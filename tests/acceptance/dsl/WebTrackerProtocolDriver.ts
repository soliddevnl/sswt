export class WebTrackerProtocolDriver {
  async visitTheApp() {
    cy.visit("http://localhost:3000");
  }

  async confirmTheAppIsOpen() {
    cy.title().should("eq", "Super Simple Workout Tracker");
  }
}
