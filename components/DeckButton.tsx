import React from 'react';

interface DeckButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const DeckButton: React.FC<DeckButtonProps> = ({ label, onClick, isActive }) => {
  const baseClasses = 'px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50';
  const activeClasses = 'bg-teal-500 text-white shadow-md shadow-teal-500/30';
  const inactiveClasses = 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200';

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

export default DeckButton;
