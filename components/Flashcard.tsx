import React from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  onClick: () => void;
  cardNumber: number;
  totalCards: number;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, isFlipped, onClick, cardNumber, totalCards }) => {
  return (
    <div
      className="w-full max-w-3xl h-96 sm:h-[28rem] [perspective:1000px] cursor-pointer"
      onClick={onClick}
      aria-live="polite"
      title="Clique para virar"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Frente do Card (Pergunta) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6 text-center">
          <div className="absolute top-4 right-4 text-sm font-medium text-gray-400">{cardNumber} / {totalCards}</div>
          <div className="w-full flex-grow flex flex-col justify-center items-center overflow-y-auto py-4">
            <h2 className="text-base font-bold text-blue-500 uppercase tracking-wider mb-4">Pergunta</h2>
            <p className="w-full text-gray-800 text-xl sm:text-2xl font-semibold">{question}</p>
          </div>
        </div>
        
        {/* Verso do Card (Resposta) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6">
           <div className="absolute top-4 right-4 text-sm font-medium text-gray-400">{cardNumber} / {totalCards}</div>
            <div className="w-full flex-grow flex flex-col justify-center items-center overflow-y-auto py-4">
              <h2 className={`text-base font-bold text-teal-500 uppercase tracking-wider mb-4`}>Resposta</h2>
              
              <div className="mb-4 p-3 bg-blue-50/80 border border-blue-200 rounded-lg w-full text-left">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Pergunta</p>
                <p className="text-lg text-gray-700">{question}</p>
              </div>

              <p className={`w-full text-teal-600 text-xl sm:text-2xl text-left font-medium`}>{answer}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;