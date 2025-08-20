import { deckFunctionality } from "./deck.js";

// let playerFunctionality =
class Player {
  constructor(name) {
    this.name = name;
    this.deck = deckFunctionality.createPlayersDeck();
  }
  addToDeck(num) {
    this.deck.push(num);
  }
}

export { Player };
