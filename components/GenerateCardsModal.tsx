import * as React from 'react';
import { useState, useEffect } from 'react';
import { Category } from '../types.ts';

interface GenerateCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (topic: string, count: number, categoryId: string) => Promise<void>;
  categories: Category[];
}

export const GenerateCardsModal = ({ isOpen, onClose, onGenerate, categories }: GenerateCardsModalProps) => {
  const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const [topic, setTopic] = useState('');
  const [count, setCount] = useState(5);
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      setTopic('');
      setCount(5);
      setCategoryId(categories[0]?.id || '');
      setError(null);
      setIsLoading(false);
    }
  }, [isOpen, categories]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || count <= 0 || !categoryId) {
        setError("Por favor, preencha todos os campos.");
        return;
    }
    setError(null);
    setIsLoading(true);
    try {
        await onGenerate(topic, count, categoryId);
        onClose();
    } catch(err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in" aria-modal="true" role="dialog">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300">
        <header className="p-5 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Gerar Cards com IA</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Fechar" disabled={isLoading}>
            <XIcon className="w-7 h-7" />
          </button>
        </header>
        
        <form onSubmit={handleSubmit}>
            <main className="p-6 space-y-6">
                <div>
                  <label htmlFor="topic-input" className="block text-lg font-semibold text-gray-700 mb-2">1. Digite o Tópico</label>
                  <input
                    id="topic-input"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ex: Revolução Francesa"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg"
                    disabled={isLoading}
                    required
                  />
                </div>
                 <div>
                  <label htmlFor="category-select" className="block text-lg font-semibold text-gray-700 mb-2">2. Adicionar à Matéria</label>
                  <select
                    id="category-select"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg"
                    disabled={isLoading}
                    required
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="count-input" className="block text-lg font-semibold text-gray-700 mb-2">3. Número de Questões</label>
                  <input
                    id="count-input"
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    min="1"
                    max="50"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg"
                    disabled={isLoading}
                    required
                  />
                </div>

                {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center">{error}</p>}
                
            </main>
          
            <footer className="p-5 bg-gray-50 border-t border-gray-200 flex justify-end gap-4">
              <button 
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                disabled={isLoading}
                className="px-6 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gerando...</span>
                    </>
                ) : 'Gerar'}
              </button>
            </footer>
        </form>
      </div>
    </div>
  );
};
