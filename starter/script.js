"use strict";
var scores, roundScore, activePlayer, dice;
init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  // 1.Random number
  dice = Math.floor(Math.random() * 6 + 1);
  // 2. Display the result
  var diceDOM = document.querySelector(".dice");

  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  // 3. Update the round score IF the rolled number is not 1

  if (dice > 1) {
    //Add score
    roundScore += dice;
    document.querySelector(
      "#current--" + activePlayer
    ).textContent = roundScore;
  } else {
    nextPlayer();
  }
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  //Add Current score to Global score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector("#score--" + activePlayer).textContent =
    scores[activePlayer];
  //Next player turn
  nextPlayer();
});

// document.querySelector("#current--" + activePlayer).textContent = dice;

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  if (scores[activePlayer] >= 10) {
    document.querySelector("#name--" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player--" + activePlayer)
      .classList.add("player--winner");
    document
      .querySelector(".player--" + activePlayer)
      .classList.remove("player--active");
  } else {
    nextPlayer();
  }
}
document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.querySelector("#name--" + activePlayer).textContent =
    "Player " + activePlayer;
  document
    .querySelector(".player--" + activePlayer)
    .classList.remove("player--winner");
  document
    .querySelector(".player--" + activePlayer)
    .classList.add("player--active");
}
