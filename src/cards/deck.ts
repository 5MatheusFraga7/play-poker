interface CardType {
  suit: string;
  value: string;
}

interface CardDeck {
  cards: CardType[]
}

class Deck {
  private myDeck: CardDeck;

  constructor() {
    const suits = ['Copas', 'Espadas', 'Ouros', "Paus"];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Rainha', 'Rei', 'Ás'];

    this.myDeck = { cards: [] };

    for (let suit of suits) {
      for (let value of values) {
        this.myDeck.cards.push({ suit, value });
      }
    }

  }

  getDeck(): CardDeck {
    return this.suffle();
  }

  private suffle(): CardDeck {

    const deck = this.myDeck;

    for (let i = deck.cards.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * (i + 1));

      const firstCard = deck.cards[i];
      const secondCard = deck.cards[randomPosition];

      deck.cards[i] = secondCard;
      deck.cards[randomPosition] = firstCard;

    }

    for (let i = deck.cards.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * (i + 1));

      const firstCard = deck.cards[i];
      const secondCard = deck.cards[randomPosition];

      deck.cards[i] = secondCard;
      deck.cards[randomPosition] = firstCard;

    }

    return deck;
  }

}

export default Deck;