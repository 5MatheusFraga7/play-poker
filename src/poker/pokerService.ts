import Deck from "../cards/deck";

interface CardType {
  suit: string;
  value: string;
}
interface PlayerHand {
  hand: CardType[]
}

class PokerService {
  private deck;
  private playerNumbers: number;
  private playerHands: PlayerHand[];

  constructor() {
    this.deck = new Deck().getDeck();
    this.playerNumbers = 5;
    this.playerHands = [{ hand: [] }];
  }

  getDeck(): any {
    return this.deck
  }

  setplayerNumbers(playerNumbers: number): void {
    this.playerNumbers = playerNumbers;
  }

  // Faz um split do array nas primeiras N posições de jogadores
  // Se tem 5 jogadores, pega as primeiras 10 cartas, 2 p/ cada

  getPlayerHands(): Array<CardType> {
    const playerHands = this.deck.cards.splice(0, (this.playerNumbers * 2) + 1)
    playerHands.shift()

    return playerHands;
  }
  // Faz um split do array nas primeira ósições dos players
  // Remove as 5 próximas cartas que ficarão na mesa

  getComunitaryCards(): Array<CardType> {
    this.deck.cards.splice(0, (this.playerNumbers * 2) + 1);
    this.deck.cards.splice(0, (4) + 1);
    return this.deck.cards.splice(0, (4) + 1);;
  }

}

export default PokerService;