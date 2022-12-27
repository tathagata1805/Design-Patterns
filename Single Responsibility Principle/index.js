// Single Responsibility Principal:-
// One class should be responsible for handling only one task.
// There should be only one reason to change or alter a particular class or module

import logMessage from "./logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max Calories Exceeded");
    } else {
      logMessage("Calories within limit");
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
