import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { CATEGORIES } from './constants.ts';
import { Flashcard } from './components/Flashcard.tsx';
import { ExamQuestion } from './components/ExamQuestion.tsx';
import { SettingsModal } from './components/SettingsModal.tsx';
import { HomeScreen } from './components/HomeScreen.tsx';
import { GenerateCardsModal } from './components/GenerateCardsModal.tsx';
import { generateFlashcards } from './lib/gemini.ts';
import { Category, Deck, Card } from './types.ts';

const initialCategoriesWithIds: Category[] = CATEGORIES.map(category => ({
  ...category,
  decks: category.decks.map(deck => ({
    ...deck,
    cards: deck.cards.map((card, index) => ({
      ...card,
      id: `${category.id}-${deck.id}-${index}`
    }))
  }))
}));

export const App = () => {
    const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    );

    const GearIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.003-.827c.293-.24.438-.613-.438.995s-.145-.755-.438-.995l-1.003-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37.49l1.217.456c.355.133.75.072 1.075.124.073-.044.146-.087.22-.127.332-.183.582.495-.645-.87l.213-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );

    const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    );

    const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    );

    const CheckCircleIconForApp = (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
    
    const [categories, setCategories] = useState<Category[]>(initialCategoriesWithIds);
    const [view, setView] = useState('home');
    const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES[1].id);
    const [selectedDeckId, setSelectedDeckId] = useState('novas-ineditas-fgv');
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
    const [studyMode, setStudyMode] = useState<'flashcard' | 'exam'>('exam');
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [studiedCards, setStudiedCards] = useState(() => {
        try {
            const item = window.localStorage.getItem('studiedCards');
            return item ? JSON.parse(item) : {};
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return {};
        }
    });
    const [studyUnstudiedOnly, setStudyUnstudiedOnly] = useState(false);
    
    useEffect(() => {
        try {
            window.localStorage.setItem('studiedCards', JSON.stringify(studiedCards));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [studiedCards]);


    const resetStudyState = () => {
      setCurrentCardIndex(0);
      setIsFlipped(false);
      setIsCompleted(false);
      setIsAnswerVisible(false);
    };

    const handleStartStudy = (catId: string, deckId: string, sMode: 'flashcard' | 'exam') => {
      setSelectedCategoryId(catId);
      setSelectedDeckId(deckId);
      setStudyMode(sMode);
      resetStudyState();
      setView('study');
    };

    const handleGoHome = () => {
      setView('home');
    };

    const activeCategory = useMemo(() => 
      categories.find(cat => cat.id === selectedCategoryId) || categories[0], 
      [selectedCategoryId, categories]
    );
    
    const activeDeckName = useMemo(() => {
      if (!activeCategory) return '';
      if (selectedDeckId === 'all') {
        return `Todas as provas de ${activeCategory.name}`;
      }
      return activeCategory.decks.find(deck => deck.id === selectedDeckId)?.name || '';
    }, [activeCategory, selectedDeckId]);

    const activeCards = useMemo(() => {
      if (!activeCategory) return [];
      
      let allCards: Card[] = [];
      if (selectedDeckId === 'all') {
        allCards = activeCategory.decks.flatMap(deck => deck.cards);
      } else {
        const foundDeck = activeCategory.decks.find(deck => deck.id === selectedDeckId);
        allCards = foundDeck ? foundDeck.cards : [];
      }

      if (studyUnstudiedOnly) {
        return allCards.filter(card => !studiedCards[card.id]);
      }
      
      return allCards;
    }, [activeCategory, selectedDeckId, studyUnstudiedOnly, studiedCards]);
    
    useEffect(() => {
        if (activeCards.length > 0 && currentCardIndex >= activeCards.length) {
            setIsCompleted(true);
        } else {
             setIsCompleted(false);
        }
    }, [activeCards, currentCardIndex]);

    const handleSettingsSave = (newCategoryId: string, newDeckId: string, newStudyMode: 'flashcard' | 'exam', newStudyUnstudiedOnly: boolean) => {
      if (selectedCategoryId !== newCategoryId || selectedDeckId !== newDeckId || studyUnstudiedOnly !== newStudyUnstudiedOnly) {
        setSelectedCategoryId(newCategoryId);
        setSelectedDeckId(newDeckId);
        setStudyUnstudiedOnly(newStudyUnstudiedOnly);
        resetStudyState();
      } else if (studyMode !== newStudyMode) {
         setIsFlipped(false);
         setIsAnswerVisible(false);
      }
      
      setStudyMode(newStudyMode);
      setIsSettingsOpen(false);
    };

    const handleGenerateCards = async (topic: string, count: number, categoryId: string) => {
      const newCardsData = await generateFlashcards(topic, count);
      
      const newDeck: Deck = {
        id: `ai-${topic.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`,
        name: `${topic} (${count} questões IA)`,
        cards: newCardsData.map((card, index) => ({
          ...card,
          id: `ai-card-${Date.now()}-${index}`
        }))
      };

      setCategories(prevCategories => {
        return prevCategories.map(category => {
          if (category.id === categoryId) {
            return {
              ...category,
              decks: [...category.decks, newDeck]
            };
          }
          return category;
        });
      });
    };

    const handleFlipCard = () => setIsFlipped(!isFlipped);

    const handleNextCard = () => {
      if (currentCardIndex < activeCards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        setIsFlipped(false);
        setIsAnswerVisible(false);
      } else {
        setIsCompleted(true);
      }
    };

    const handlePrevCard = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
        setIsFlipped(false);
        setIsAnswerVisible(false);
      }
    };
    
    const handleRestart = () => {
      resetStudyState();
    };
    
    const toggleStudiedStatus = (cardId: string) => {
      setStudiedCards(prev => {
        const newStudied = {...prev};
        if (newStudied[cardId]) {
          delete newStudied[cardId];
        } else {
          newStudied[cardId] = true;
        }
        return newStudied;
      });
    };
    
    const progressPercentage = activeCards.length > 0 ? ((currentCardIndex + 1) / activeCards.length) * 100 : 0;
    
    if (view === 'home') {
      return (
        <React.Fragment>
            <HomeScreen 
              categories={categories} 
              onStartStudy={handleStartStudy} 
              studiedCards={studiedCards}
              onOpenGenerateModal={() => setIsGenerateModalOpen(true)}
            />
            <GenerateCardsModal
              isOpen={isGenerateModalOpen}
              onClose={() => setIsGenerateModalOpen(false)}
              onGenerate={handleGenerateCards}
              categories={categories}
            />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <SettingsModal 
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onSave={handleSettingsSave}
          categories={categories}
          currentCategoryId={selectedCategoryId}
          currentDeckId={selectedDeckId}
          currentStudyMode={studyMode}
          currentStudyUnstudiedOnly={studyUnstudiedOnly}
        />
        <main className="bg-blue-50 text-gray-800 min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 relative">
          <header className="text-center mb-4 w-full pt-16 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Flash Cards <span className="text-blue-500">Stanismar</span>
            </h1>
            <p className="text-gray-500 mt-2 text-base">Seus flashcards para provas da FGV.</p>
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <button
                onClick={handleGoHome}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-50"
                aria-label="Voltar para o início"
              >
                <HomeIcon className="w-7 h-7 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-50"
                aria-label="Abrir configurações"
              >
                <GearIcon className="w-7 h-7 text-gray-600" />
              </button>
            </div>
          </header>

          <div className="text-center mb-6 p-4 bg-white/60 rounded-xl border border-blue-200 w-full max-w-3xl">
            <p className="text-gray-600 text-lg">
              Estudando: <span className="font-bold text-blue-600">{activeCategory?.name}</span> - <span className="font-semibold text-gray-800">{activeDeckName}</span>
            </p>
          </div>

          <section className="w-full flex-grow flex flex-col items-center justify-center gap-6">
            {activeCards.length > 0 ? (
              isCompleted ? (
                <div className="w-full max-w-3xl h-96 sm:h-[28rem] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center animate-fade-in">
                  <CheckCircleIconForApp className="w-20 h-20 text-green-500 mb-4"/>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Parabéns!</h2>
                  <p className="text-gray-600 mb-6 text-lg">Você concluiu os cards de {activeDeckName}.</p>
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white text-lg"
                  >
                    Estudar Novamente
                  </button>
                </div>
              ) : (
                <React.Fragment>
                  <div className="w-full max-w-3xl">
                    <div className="h-2.5 w-full rounded-full bg-blue-100">
                      <div
                        className="h-2.5 rounded-full bg-blue-500 transition-all duration-500 ease-in-out"
                        style={{ width: `${progressPercentage}%` }}
                        aria-valuenow={progressPercentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center my-2">
                      <input
                          type="checkbox"
                          id="mark-as-studied"
                          className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                          checked={!!studiedCards[activeCards[currentCardIndex].id]}
                          onChange={() => toggleStudiedStatus(activeCards[currentCardIndex].id)}
                          aria-label="Marcar como estudado"
                      />
                      <label htmlFor="mark-as-studied" className="ml-2 text-gray-700 font-medium cursor-pointer">
                          Marcar como estudado
                      </label>
                  </div>

                  {studyMode === 'flashcard' ? (
                    <Flashcard
                      question={activeCards[currentCardIndex].question}
                      shortQuestion={activeCards[currentCardIndex].shortQuestion}
                      answer={activeCards[currentCardIndex].answer}
                      isFlipped={isFlipped}
                      onClick={handleFlipCard}
                      cardNumber={currentCardIndex + 1}
                      totalCards={activeCards.length}
                    />
                  ) : (
                    <ExamQuestion
                      question={activeCards[currentCardIndex].question}
                      answer={activeCards[currentCardIndex].answer}
                      alternatives={activeCards[currentCardIndex].alternatives}
                      correctAlternativeIndex={activeCards[currentCardIndex].correctAlternativeIndex}
                      isAnswerVisible={isAnswerVisible}
                      onToggleAnswer={() => setIsAnswerVisible(!isAnswerVisible)}
                      cardNumber={currentCardIndex + 1}
                      totalCards={activeCards.length}
                    />
                  )}
                  
                  <div className="text-center text-gray-600 font-medium text-lg" aria-live="polite">
                    Card {currentCardIndex + 1} de {activeCards.length}
                  </div>

                  <div className="flex items-center justify-between w-full max-w-3xl">
                    <button
                      onClick={handlePrevCard}
                      disabled={currentCardIndex === 0}
                      className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors shadow-sm text-lg"
                      aria-label="Card anterior"
                    >
                      <ArrowLeftIcon className="w-6 h-6" />
                      <span className="hidden sm:inline font-semibold">Anterior</span>
                    </button>
                    <button
                      onClick={handleNextCard}
                      className="flex items-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40 text-lg"
                      aria-label="Próximo card"
                    >
                      <span className="hidden sm:inline font-semibold">Próximo</span>
                      <ArrowRightIcon className="w-6 h-6" />
                    </button>
                  </div>
                </React.Fragment>
              )
            ) : (
                <div className="w-full max-w-3xl h-96 sm:h-[28rem] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center animate-fade-in">
                  <CheckCircleIconForApp className="w-20 h-20 text-green-500 mb-4"/>
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {studyUnstudiedOnly ? "Você já estudou tudo!" : "Nenhum card para mostrar."}
                  </h2>
                  <p className="text-gray-500 mt-2 max-w-md">
                    {studyUnstudiedOnly 
                      ? "Desative o filtro 'Estudar apenas não vistas' nas configurações para revisar as questões." 
                      : "Abra as configurações para selecionar uma matéria e uma prova para estudar."}
                  </p>
                </div>
            )}
          </section>
          
          <footer className="text-center text-gray-500 mt-8 text-base">
            {studyMode === 'flashcard' && <p>Clique no card para virar e ver a resposta.</p>}
            {studyMode === 'exam' && <p>Selecione uma alternativa e clique em "Revelar Resposta".</p>}
          </footer>
        </main>
      </React.Fragment>
    );
};
