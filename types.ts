export interface Card {
  question: string;
  answer: string;
}

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
}

export interface Category {
  id: string;
  name: string;
  decks: Deck[];
}
