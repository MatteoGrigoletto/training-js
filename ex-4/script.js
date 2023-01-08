"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (text) {
  document.querySelector(".message").textContent = text;
};

document.querySelector(".check").addEventListener("click", function () {
  const numberSelect = Number(document.querySelector(".guess").value);

  if (!numberSelect) {
    displayMessage("⛔️ No number!");
  } else if (numberSelect === randomNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").classList.add("bg-green");
    document.querySelector(".check").classList.add("d-none");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (numberSelect !== randomNumber) {
    if (score > 1) {
      displayMessage(
        numberSelect > randomNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").classList.add("d-none");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
