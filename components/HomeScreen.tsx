import * as React from 'react';
import { useState } from 'react';
import { Category } from '../types';

interface HomeScreenProps {
  categories: Category[];
  onStartStudy: (categoryId: string, deckId: string, studyMode: 'flashcard' | 'exam') => void;
  studiedCards: { [key: string]: boolean };
  onOpenGenerateModal: () => void;
}

export const HomeScreen = ({ categories, onStartStudy, studiedCards, onOpenGenerateModal }: HomeScreenProps) => {
  const [selectedStudyMode, setSelectedStudyMode] = useState<'flashcard' | 'exam'>('exam');
  
  const BookOpenIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
  
  const PlayCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
  );

  const SparklesIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 13.5z" />
    </svg>
  );

  return (
    <main className="bg-blue-50 min-h-screen w-full relative">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in pb-24">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Flash Cards <span className="text-blue-500">Stanismar</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">Selecione uma matéria e uma prova para começar seus estudos.</p>
        </header>

        <div className="mb-10 sticky top-4 z-10">
          <div className="max-w-md mx-auto bg-white/70 backdrop-blur-sm p-2 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-xl font-bold text-gray-700 mb-3 text-center">1. Escolha o Modo de Estudo</h2>
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => setSelectedStudyMode('flashcard')}
                  className={`w-full flex items-center justify-center gap-2 text-center px-4 py-2.5 rounded-lg font-semibold transition-all ${selectedStudyMode === 'flashcard' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    Flashcard
                </button>
                <button 
                  onClick={() => setSelectedStudyMode('exam')}
                  className={`w-full flex items-center justify-center gap-2 text-center px-4 py-2.5 rounded-lg font-semibold transition-all ${selectedStudyMode === 'exam' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    Modo Prova
                </button>
              </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">2. Escolha a Matéria e a Prova</h2>
          <div className="space-y-8">
            {categories.map(category => {
                const allDeckCards = category.decks.flatMap(d => d.cards);
                const allStudiedCount = allDeckCards.filter(c => studiedCards[c.id]).length;
                const allTotalCount = allDeckCards.length;

              return (
                <div key={category.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <BookOpenIcon className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.decks.length > 1 && (
                        <button 
                            key={`${category.id}-all`}
                            onClick={() => onStartStudy(category.id, 'all', selectedStudyMode)}
                            className="group text-left p-4 bg-white rounded-lg hover:bg-blue-500 transition-all border border-gray-200 flex items-start justify-between gap-3 shadow-sm hover:shadow-xl hover:border-blue-500"
                          >
                            <div className="flex-1">
                              <p className="font-semibold text-gray-700 group-hover:text-white">Todas as provas de {category.name}</p>
                              {allTotalCount > 0 && (
                                <p className={`text-sm mt-1 group-hover:text-blue-200 ${allStudiedCount === allTotalCount ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                  {allStudiedCount} de {allTotalCount} estudadas
                                </p>
                              )}
                            </div>
                            <PlayCircleIcon className="w-8 h-8 text-blue-400 group-hover:text-white transition-transform transform group-hover:scale-110 flex-shrink-0 mt-1"/>
                          </button>
                    )}
                    {category.decks.map(deck => {
                      const studiedCount = deck.cards.filter(c => c.id && studiedCards[c.id]).length;
                      const totalCount = deck.cards.length;
                      return (
                        <button 
                          key={deck.id}
                          onClick={() => onStartStudy(category.id, deck.id, selectedStudyMode)}
                          className="group text-left p-4 bg-white rounded-lg hover:bg-blue-500 transition-all border border-gray-200 flex items-start justify-between gap-3 shadow-sm hover:shadow-xl hover:border-blue-500"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-gray-700 group-hover:text-white">{deck.name}</p>
                            {totalCount > 0 && (
                              <p className={`text-sm mt-1 group-hover:text-blue-200 ${studiedCount === totalCount ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {studiedCount} de {totalCount} estudadas
                              </p>
                            )}
                          </div>
                          <PlayCircleIcon className="w-8 h-8 text-blue-400 group-hover:text-white transition-transform transform group-hover:scale-110 flex-shrink-0 mt-1"/>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6 z-20">
        <button 
            onClick={onOpenGenerateModal}
            className="flex items-center gap-3 px-5 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-2xl shadow-blue-500/50 hover:bg-blue-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Gerar novos cards com Inteligência Artificial"
        >
            <SparklesIcon className="w-6 h-6"/>
            <span className="hidden sm:inline">Gerar com IA</span>
        </button>
      </div>
    </main>
  );
};
