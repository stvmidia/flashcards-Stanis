import * as React from 'react';
import type { Deck } from '../types';

interface DeckButtonProps {
  deck: Deck;
  onSelect: (deck: Deck) => void;
}

export const DeckButton: React.FC<DeckButtonProps> = ({ deck, onSelect }) => (
  <button 
    onClick={() => onSelect(deck)}
    className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300 text-left"
  >
    <h2 className="text-xl font-semibold text-blue-700">{deck.name}</h2>
  </button>
);
