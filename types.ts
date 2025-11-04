export interface Flashcard {
  question: string;
  answer: string;
}

export interface Deck {
  id: string;
  name: string;
  cards: Flashcard[];
}

export interface Category {
  id: string;
  name: string;
  decks: Deck[];
}
