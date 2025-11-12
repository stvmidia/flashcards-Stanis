import * as React from 'react';

interface ExamQuestionProps {
  question: string;
  answer: string;
  alternatives?: string[];
  correctAlternativeIndex?: number;
  isAnswerVisible: boolean;
  onToggleAnswer: () => void;
  cardNumber: number;
  totalCards: number;
}

export const ExamQuestion = ({ question, answer, alternatives, correctAlternativeIndex, isAnswerVisible, onToggleAnswer, cardNumber, totalCards }: ExamQuestionProps) => {
  const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EyeSlashIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228" />
    </svg>
  );

  const CheckCircleIconForExam = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );

  const [selectedAlternative, setSelectedAlternative] = React.useState<number | null>(null);

  React.useEffect(() => {
    setSelectedAlternative(null);
  }, [question]);

  const hasAlternatives = alternatives && alternatives.length > 0;

  return (
    <div className="w-full max-w-3xl min-h-96 sm:min-h-[28rem] h-auto bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-start items-center p-6 text-center animate-fade-in">
      <div className="absolute top-4 right-4 text-sm font-medium text-gray-400" aria-hidden="true">{cardNumber} / {totalCards}</div>
      <div className="w-full flex-grow flex flex-col justify-start items-center overflow-y-auto py-4">
        <h2 className="text-base font-bold text-blue-500 uppercase tracking-wider mb-4">Pergunta</h2>
        <p className="w-full text-gray-800 text-lg text-left whitespace-pre-wrap">{question}</p>

        {hasAlternatives && (
          <div className="w-full text-left mt-8 space-y-3">
            {alternatives.map((alt, index) => {
              const isCorrect = index === correctAlternativeIndex;
              const isSelected = index === selectedAlternative;
              
              let stateClasses = 'border-gray-300 hover:bg-gray-50';
              if (isAnswerVisible) {
                if (isCorrect) {
                  stateClasses = 'bg-green-100 border-green-500 text-green-900 font-semibold';
                } else if (isSelected) {
                  stateClasses = 'bg-red-100 border-red-500 text-red-900 line-through';
                }
              } else if (isSelected) {
                stateClasses = 'bg-blue-100 border-blue-500 ring-2 ring-blue-200';
              }
              
              return (
                <div
                  key={index}
                  onClick={() => !isAnswerVisible && setSelectedAlternative(index)}
                  className={`flex items-center p-3 border rounded-lg transition-all text-lg ${!isAnswerVisible ? 'cursor-pointer' : 'cursor-default'} ${stateClasses}`}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isAnswerVisible ? -1 : 0}
                  onKeyDown={(e) => !isAnswerVisible && (e.key === ' ' || e.key === 'Enter') && setSelectedAlternative(index)}
                >
                  <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1">{alt}</span>
                  {isAnswerVisible && isSelected && !isCorrect && <XCircleIcon className="w-6 h-6 text-red-600 ml-2 flex-shrink-0" />}
                  {isAnswerVisible && isCorrect && <CheckCircleIconForExam className="w-6 h-6 text-green-600 ml-2 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        )}

        {isAnswerVisible && (
          <div className="mt-6 pt-6 border-t border-gray-200 w-full animate-fade-in text-left">
            <h2 className="text-base font-bold text-teal-500 uppercase tracking-wider mb-4 text-center">
              {hasAlternatives ? 'Explicação' : 'Resposta'}
            </h2>
            <p className="w-full text-teal-700 text-lg sm:text-xl font-normal text-center">{answer}</p>
          </div>
        )}
      </div>

      <div className="w-full pt-4 border-t border-gray-100 mt-auto">
        <button
          onClick={onToggleAnswer}
          className="flex items-center justify-center gap-2 w-full sm:w-auto sm:px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-auto"
          aria-live="polite"
        >
          {isAnswerVisible ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
          {isAnswerVisible ? 'Ocultar Resposta' : 'Revelar Resposta'}
        </button>
      </div>
    </div>
  );
};
