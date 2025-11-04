import React from 'react';

interface CategoryButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, onClick, isActive }) => {
  const baseClasses = 'px-5 py-2.5 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50';
  const activeClasses = 'bg-blue-500 text-white shadow-lg shadow-blue-500/40';
  const inactiveClasses = 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default CategoryButton;