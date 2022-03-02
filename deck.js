const SUITS = ["🐺", "🐐", "🥬", "🎯"];
let deck = [];

export default class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards
    }
  
    get numberOfCards() {
      return this.cards.length
    }
  
    pop() {
      return this.cards.shift()
    }
  
    push(card) {
      this.cards.push(card)
    }
  
    shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
    }
  }
  
  class Card {
    constructor(suit) {
      this.suit = suit
    }
  }


function freshDeck(){
  
    for(let i = 0; i <= 9; i++)
        deck[i] = SUITS[0];

    
    for(let i = 10; i <= 19; i++)
         deck[i] = SUITS[1];

    for(let i = 20; i <= 29; i++)
         deck[i] = SUITS[2];

    deck[30] = SUITS[3], deck[31] = SUITS[3];

    return deck;

}