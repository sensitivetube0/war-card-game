import { Player } from "./player.js";

let game = (function () {
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");
  console.log(player1);
  let card1 = document.querySelector(".card1");
  let card2 = document.querySelector(".card2");
  function checkWinnerRound() {
    if (player1.deck[0] > player2.deck[0]) {
      card1.textContent = player1.deck[0];
      card2.textContent = player2.deck[0];
      player1.addToDeck(parseInt(player2.deck.splice(0, 1)));
    } else if (player1.deck[0] < player2.deck[0]) {
      card1.textContent = player1.deck[0];
      card2.textContent = player2.deck[0];
      player2.addToDeck(parseInt(player1.deck.splice(0, 1)));
    } else if (player1.deck[0] === player2.deck[0]) {
      return war();
    } else if (player1.deck[0]) {
      alert(`winner of game is ${player1.name}`);
      player1 = new Player("Player 1");
      player2 = new Player("Player 2");
      return 1;
    } else {
      alert(`winner of game is ${player2.name}`);
      player1 = new Player("Player 1");
      player2 = new Player("Player 2");
      return 1;
    }
  }
  function war() {
    if (player1.deck[4] > player2.deck[4]) {
      player2.deck.splice(0, 4).forEach((item) => {
        card1.textContent = player1.deck[4];
        card2.textContent = player2.deck[4];
        player1.addToDeck(item);
      });
      console.log(player1.deck);
    } else if (player2.deck[4] > player1.deck[4]) {
      card1.textContent = player1.deck[0];
      card2.textContent = player2.deck[0];
      player1.deck.splice(0, 4).forEach((item) => {
        player2.addToDeck(item);
      });
    } else if (player1.deck[4]) {
      alert(`winner is ${player1.name}`);
      player1 = new Player("Player 1");
      player2 = new Player("Player 2");
      return 1;
    } else {
      alert(`winner is ${player2.name}`);
      player1 = new Player("Player 1");
      player2 = new Player("Player 2");
      return 1;
    }
  }
  return { checkWinnerRound };
})();

export { game };
