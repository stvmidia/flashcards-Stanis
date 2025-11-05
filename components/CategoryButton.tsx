import * as React from 'react';
import type { Category } from '../types';

interface CategoryButtonProps {
  category: Category;
  onSelect: (category: Category) => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onSelect }) => (
  <button 
    onClick={() => onSelect(category)}
    className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300 text-left"
  >
    <h2 className="text-xl font-semibold text-blue-700">{category.name}</h2>
  </button>
);
