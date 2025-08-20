let deck = [
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7,
  7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12,
  13, 13, 13, 13,
];
let deckFunctionality = (function () {
  function randomizeDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let min = 0;
      let max = array.length - 1;
      let j = Math.floor(Math.random() * (max - min + 1)) + min;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  function createPlayersDeck() {
    randomizeDeck(deck);
    let halfDeck = deck.slice(0, 27);
    return halfDeck;
  }
  return { createPlayersDeck };
})();
export { deck, deckFunctionality };
