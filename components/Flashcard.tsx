import * as React from 'react';

interface FlashcardProps {
  question: string;
  shortQuestion?: string;
  answer: string;
  isFlipped: boolean;
  onClick: () => void;
  cardNumber: number;
  totalCards: number;
}

export const Flashcard = ({ question, shortQuestion, answer, isFlipped, onClick, cardNumber, totalCards }: FlashcardProps) => {
  const displayQuestion = shortQuestion || question;
  return (
    <div
      className="w-full max-w-3xl h-96 sm:h-[28rem] [perspective:1000px] cursor-pointer"
      onClick={onClick}
      aria-live="polite"
      title="Clique para virar"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onClick()}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Frente do Card (Pergunta) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6 text-center">
          <div className="absolute top-4 right-4 text-sm font-medium text-gray-400" aria-hidden="true">{cardNumber} / {totalCards}</div>
          <div className="w-full flex-grow flex flex-col justify-center items-center overflow-y-auto py-4">
            <h2 className="text-base font-bold text-blue-500 uppercase tracking-wider mb-4">Pergunta</h2>
            <p className="w-full text-gray-800 text-xl sm:text-2xl font-semibold text-center">{displayQuestion}</p>
          </div>
        </div>
        
        {/* Verso do Card (Resposta) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6 text-center">
           <div className="absolute top-4 right-4 text-sm font-medium text-gray-400" aria-hidden="true">{cardNumber} / {totalCards}</div>
            <div className="w-full flex-grow flex flex-col justify-center items-center overflow-y-auto py-4">
              <h2 className="text-base font-bold text-teal-500 uppercase tracking-wider mb-4">Resposta</h2>
              <p className="w-full text-teal-600 text-xl sm:text-2xl font-medium text-center">{answer}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
