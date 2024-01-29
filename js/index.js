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
  constructor(customers, sales) {
    this.timeRemaining = 300; //time left to finish the game in seconds
    this.budget = 50; //budget in euros
    this.customers = customers;
    this.sales = sales;
    this.currentBatch = null;
    this.batchesBaked = [];
  }
  getBatchesAmount() {
    return this.batchesBaked.length;
  }
  bakeNewBatch() {
    if (this.budget >= 10) {
      this.currentBatch = new Batch("baking");
      this.budget -= 10; // Deduct cost of preparing a batch
      this.batchesBaked.push(this.currentBatch);
    }
  }
  updateBudgetDisplay() {
    const displayedBudget = document.getElementById("budget");
    displayedBudget.innerText = this.budget + " €";
  }
  finishBakingBatch() {
    if (this.currentBatch) {
      this.currentBatch.status = "baked";
      // Other logic for a prepared batch, like making it draggable
      this.currentBatch.moveToServingArea();
    }
  }
  sellPasteis(quantity) {}
}

class Pastel {
  constructor(status) {
    this.cost = 2;
  }
}

class Batch {
  constructor(status) {
    this.bakingTime = 6;

    this.size = 48;
    this.status = status;
  }
  startPreparing() {}
  moveToServingArea() {
    const tray = document.getElementById("tray");
    tray.setAttribute("draggable", "true");
    const servingArea = document.getElementById("serving-area");
    tray.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", "tray");
    });
    servingArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    servingArea.addEventListener("drop", (event) => {
      event.preventDefault();

      const data = event.dataTransfer.getData("text/plain");
      if (data === "tray") {
        servingArea.appendChild(tray);
      }
    });
  }
  finishBaking() {}
}
const game1 = new Game();

game1.updateBudgetDisplay();

const preparingButton = document.getElementById("start-preparing");
preparingButton.addEventListener("click", function () {
  preparingButton.setAttribute("disabled", "true");
  preparingButton.innerText = "Preparing...";
  game1.bakeNewBatch();
  game1.updateBudgetDisplay();
  //   batch1.status = "preparing";
  setTimeout(function () {
    preparingButton.innerText = "Ready!";
    game1.finishBakingBatch();
  }, 5000);
});
