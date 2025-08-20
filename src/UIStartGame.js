import { game } from "./game.js";
import { formValidate } from "./formValidate.js";
let UI = (function () {
  let startButton = document.querySelector(".start");
  let gameStarted = false;
  let player1;
  let player2;
  startButton.addEventListener("click", () => {
    // e.preventDefault();
    checkValues();
  });
  function checkValues() {
    let player1Input = document.querySelector("#player1").value;
    let player2Input = document.querySelector("#player2").value;
    if (formValidate() === true && gameStarted === false) {
      intialiseGame(player1Input, player2Input);
    } else if (gameStarted === true) {
      alert("game has already began");
    } else {
      alert("please enter a name first");
    }
  }
  function intialiseGame(input1, input2) {
    let player1Holder = document.querySelector(".player1Value");
    let player2Holder = document.querySelector(".player2Value");
    player1Holder.textContent = "";
    player1Holder.textContent = input1;
    player2Holder.textContent = "";
    player2Holder.textContent = input2;

    gameStarted = true;
  }

  let startRoundButton = document.querySelector(".startR");
  startRoundButton.addEventListener("click", () => {
    // event.preventDefault();
    if (gameStarted === true) {
      startRound();
    } else {
      alert("please start game first");
    }
  });
  function startRound() {
    if (game.checkWinnerRound() === 1) {
      gameStarted = false;
    }
  }
  return { player1, player2 };
})();
export { UI };
