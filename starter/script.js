"use strict";
var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector("#current--" + activePlayer).textContent = dice;
document.querySelector(".dice").style.display = "none";

document.querySelector(".btn--roll").addEventListener("click", function () {
  // 1.Random number
  dice = Math.floor(Math.random() * 6 + 1);
  // 2. Display the result
  var diceDOM = document.querySelector(".dice");

  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  // 3. Update the round if te
});
