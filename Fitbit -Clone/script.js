let stepCount = 0;
const stepDisplay = document.getElementById("stepCount");
const tips = [
  "Stay hydrated! Drink at least 8 glasses of water today.",
  "Take 10-minute walk breaks every hour.",
  "Stretch your body after long sitting hours.",
  "Add more veggies to your meals today.",
  "Don’t skip breakfast — start your day energized!"
];

function simulateSteps() {
  setInterval(() => {
    stepCount += Math.floor(Math.random() * 5);
    stepDisplay.textContent = stepCount;
  }, 1000);
}

function randomTip() {
  const tipDisplay = document.getElementById("tipText");
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipDisplay.textContent = tips[randomIndex];
}

window.onload = function () {
  simulateSteps();
  randomTip();
  setInterval(randomTip, 10000); // Change tip every 10 sec
};
