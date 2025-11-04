import React from 'react';

// Um sub-componente para renderizar cada face do card, tornando a lógica mais clara.
const CardFace: React.FC<{
  className?: string;
  title: string;
  titleColor: string;
  content: string;
  contentColor: string;
  contentClasses: string;
  cardNumber: number;
  totalCards: number;
  questionForContext?: string;
}> = ({ className, title, titleColor, content, contentColor, contentClasses, cardNumber, totalCards, questionForContext }) => (
  <div className={`absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6 text-center transition-shadow duration-300 group-hover:shadow-2xl ${className}`}>
    <div className="absolute top-4 right-4 text-sm font-medium text-gray-400">{cardNumber} / {totalCards}</div>
    <div className="w-full flex-grow flex flex-col justify-center items-center overflow-y-auto py-4">
      <h2 className={`text-base font-bold ${titleColor} uppercase tracking-wider mb-4`}>{title}</h2>
      
      {questionForContext && (
        <div className="mb-4 p-3 bg-blue-50/80 border border-blue-200 rounded-lg w-full text-left">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Pergunta</p>
          <p className="text-lg text-gray-700">{questionForContext}</p>
        </div>
      )}

      <p className={`w-full ${contentColor} ${contentClasses}`}>{content}</p>
    </div>
  </div>
);

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
      className="w-full max-w-3xl h-96 sm:h-[28rem] perspective-1000 cursor-pointer group"
      onClick={onClick}
      aria-live="polite"
      title="Clique para virar"
    >
      <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Frente do Card (Pergunta) */}
          <CardFace
            title="Pergunta"
            titleColor="text-blue-500"
            content={question}
            contentColor="text-gray-800"
            contentClasses="text-xl sm:text-2xl font-semibold"
            cardNumber={cardNumber}
            totalCards={totalCards}
          />
          
          {/* Verso do Card (Resposta) */}
          <CardFace
            className="transform rotate-y-180"
            title="Resposta"
            titleColor="text-teal-500"
            content={answer}
            contentColor="text-gray-700"
            contentClasses="text-xl sm:text-2xl text-justify"
            cardNumber={cardNumber}
            totalCards={totalCards}
            questionForContext={question}
          />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;