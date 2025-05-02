import { Card } from "./Card";
import _ from "lodash";
export class Game {
  cards: Card[] = [];
  firstCard: Card | null = null;
  flips = 0;

  constructor(private size: number = 4) {}

  initialize() {
    const total = this.size * this.size;
    const pairs = total / 2;
    let cards: Card[] = [];
    for (let i = 0; i < pairs; i++) {
      cards.push({ id: cards.length, pairId: i + 1, state: "hidden" });
      cards.push({ id: cards.length, pairId: i + 1, state: "hidden" });
    }
    this.cards = this.shuffle(cards);
    this.flips = 0;
  }

  shuffle(arr: Card[]): Card[] {
    return _.shuffle(arr);
  }

  flip(cardId: number): Card[] {
    const card = this.cards.find((c) => c.id === cardId);
    if (!card || card.state !== "hidden") return this.cards;
    this.flips += 1;
    card.state = "flipped";
    if (!this.firstCard) {
      this.firstCard = card;
    } else {
      if (this.firstCard.pairId === card.pairId) {
        card.state = "matched";
        this.firstCard.state = "matched";
      } else {
        const firstCard = this.firstCard;
        setTimeout(() => {
          card.state = "hidden";
          firstCard.state = "hidden";
        }, 1000);
      }
      this.firstCard = null;
    }
    return this.cards;
  }
}
