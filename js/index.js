// get a random number in an interval specifying the minimum and the maximum, including both minimum and maximum
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class CustomerOrder {
  constructor() {
    this.quantity = getRandomInt(1, 36);
    this.timeLeft = getRandomInt(30, 240);
  }
}

class Game {
  constructor(batchesPrepared, customers, sales) {
    this.timeRemaining = 300; //time left to finish the game in seconds
    this.budget = 50; //budget in euros
    this.customers = customers;
    this.sales = this.batchesReady = batchesPrepared;
  }
  startNewBatch() {}
  serveCustomers() {}
}

class Pastel {
  constructor(cost) {
    cost = 2;
  }
}

class Batch {
  constructor(batchStatus) {
    this.preparingTime = 12;
    this.bakingTime = 6;
    this.pasteis = [];
    this.size = 48;
    this.batchStatus = batchStatus;
  }
  startPreparing() {}
  moveToOven() {}
  finishBaking() {}
}
