import * as React from 'react';
import { useState, useEffect } from 'react';
import { Category } from '../types';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (categoryId: string, deckId: string, studyMode: 'flashcard' | 'exam', studyUnstudiedOnly: boolean) => void;
    categories: Category[];
    currentCategoryId: string;
    currentDeckId: string;
    currentStudyMode: 'flashcard' | 'exam';
    currentStudyUnstudiedOnly: boolean;
}

export const SettingsModal = ({ 
    isOpen, 
    onClose, 
    onSave, 
    categories, 
    currentCategoryId, 
    currentDeckId, 
    currentStudyMode,
    currentStudyUnstudiedOnly
}: SettingsModalProps) => {
    const XIcon = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );

    const [tempCategoryId, setTempCategoryId] = useState(currentCategoryId);
    const [tempDeckId, setTempDeckId] = useState(currentDeckId);
    const [tempStudyMode, setTempStudyMode] = useState(currentStudyMode);
    const [tempStudyUnstudiedOnly, setTempStudyUnstudiedOnly] = useState(currentStudyUnstudiedOnly);

    useEffect(() => {
        if (isOpen) {
            setTempCategoryId(currentCategoryId);
            setTempDeckId(currentDeckId);
            setTempStudyMode(currentStudyMode);
            setTempStudyUnstudiedOnly(currentStudyUnstudiedOnly);
        }
    }, [isOpen, currentCategoryId, currentDeckId, currentStudyMode, currentStudyUnstudiedOnly]);

    if (!isOpen) {
        return null;
    }
    
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCatId = e.target.value;
        setTempCategoryId(newCatId);
        const category = categories.find(c => c.id === newCatId);
        const defaultDeckId = category?.decks.length === 1 ? category.decks[0].id : 'all';
        setTempDeckId(defaultDeckId || 'all'); 
    };

    const handleSave = () => {
        onSave(tempCategoryId, tempDeckId, tempStudyMode, tempStudyUnstudiedOnly);
    };

    const selectedCategoryForDecks = categories.find(c => c.id === tempCategoryId);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in" aria-modal="true" role="dialog">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300">
                <header className="p-5 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Configurações de Estudo</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Fechar">
                        <XIcon className="w-7 h-7" />
                    </button>
                </header>
                
                <main className="p-6 space-y-6">
                    <div>
                        <label htmlFor="category-select" className="block text-lg font-semibold text-gray-700 mb-2">1. Escolha a Matéria</label>
                        <select
                            id="category-select"
                            value={tempCategoryId}
                            onChange={handleCategoryChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg"
                        >
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    {selectedCategoryForDecks && (
                        <div>
                            <h3 className="block text-lg font-semibold text-gray-700 mb-3">2. Escolha a Prova</h3>
                            <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                                {selectedCategoryForDecks.decks.length > 1 && (
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="deck-all"
                                            name="deck-selection"
                                            value="all"
                                            checked={tempDeckId === 'all'}
                                            onChange={(e) => setTempDeckId(e.target.value)}
                                            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="deck-all" className="ml-3 block text-lg text-gray-800">
                                            Todas as provas de {selectedCategoryForDecks.name}
                                        </label>
                                    </div>
                                )}
                                {selectedCategoryForDecks.decks.map(deck => (
                                    <div key={deck.id} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`deck-${deck.id}`}
                                            name="deck-selection"
                                            value={deck.id}
                                            checked={tempDeckId === deck.id}
                                            onChange={(e) => setTempDeckId(e.target.value)}
                                            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor={`deck-${deck.id}`} className="ml-3 block text-lg text-gray-800">
                                            {deck.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h3 className="block text-lg font-semibold text-gray-700 mb-3">3. Escolha o Modo de Estudo</h3>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                                <input
                                    type="radio"
                                    id="mode-flashcard"
                                    name="mode-selection"
                                    value="flashcard"
                                    checked={tempStudyMode === 'flashcard'}
                                    onChange={(e) => setTempStudyMode(e.target.value as 'flashcard' | 'exam')}
                                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="mode-flashcard" className="ml-3 block text-lg text-gray-800 cursor-pointer w-full">
                                    Modo Flashcard
                                    <p className="text-sm text-gray-500 font-normal">Ideal para memorização rápida.</p>
                                </label>
                            </div>
                            <div className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                                <input
                                    type="radio"
                                    id="mode-exam"
                                    name="mode-selection"
                                    value="exam"
                                    checked={tempStudyMode === 'exam'}
                                    onChange={(e) => setTempStudyMode(e.target.value as 'flashcard' | 'exam')}
                                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="mode-exam" className="ml-3 block text-lg text-gray-800 cursor-pointer w-full">
                                    Modo Prova
                                    <p className="text-sm text-gray-500 font-normal">Simula a exibição da questão completa.</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="block text-lg font-semibold text-gray-700 mb-3">4. Opções Avançadas</h3>
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                            <input
                                type="checkbox"
                                id="study-unstudied"
                                name="study-unstudied"
                                checked={tempStudyUnstudiedOnly}
                                onChange={(e) => setTempStudyUnstudiedOnly(e.target.checked)}
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="study-unstudied" className="ml-3 block text-lg text-gray-800 cursor-pointer w-full">
                                Estudar apenas questões não vistas
                                <p className="text-sm text-gray-500 font-normal">Oculta as questões que você marcar como "estudadas".</p>
                            </label>
                        </div>
                    </div>
                </main>
                
                <footer className="p-5 bg-gray-50 border-t border-gray-200 flex justify-end gap-4">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleSave}
                        className="px-6 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Estudar
                    </button>
                </footer>
            </div>
        </div>
    );
};
