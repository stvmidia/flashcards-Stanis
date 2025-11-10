export interface Card {
  id: string;
  question: string;
  shortQuestion?: string;
  answer: string;
  alternatives?: string[];
  correctAlternativeIndex?: number;
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
