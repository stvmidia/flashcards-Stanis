import { GoogleGenAI, Type } from "@google/genai";
import { Card } from '../types.ts';

export const generateFlashcards = async (topic: string, count: number): Promise<Omit<Card, 'id'>[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Gere ${count} flashcards de múltipla escolha sobre o tópico "${topic}".
      As perguntas devem ser no estilo da banca FGV: complexas, com cenários e textos de apoio quando apropriado.
      Para cada card, forneça os seguintes campos:
      - "question": A pergunta completa e detalhada.
      - "shortQuestion": Uma versão resumida da pergunta para o modo flashcard (máximo 100 caracteres).
      - "answer": A justificativa ou explicação completa da alternativa correta.
      - "alternatives": Um array com 4 ou 5 strings, onde uma é a correta.
      - "correctAlternativeIndex": O índice (base 0) da alternativa correta no array.

      Retorne o resultado como um array de objetos JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: {
                type: Type.STRING,
                description: 'A pergunta completa e detalhada, estilo FGV.'
              },
              shortQuestion: {
                type: Type.STRING,
                description: 'Uma versão curta da pergunta (máximo 100 caracteres).'
              },
              answer: {
                type: Type.STRING,
                description: 'A explicação detalhada da resposta correta.'
              },
              alternatives: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Um array de 4 ou 5 alternativas de múltipla escolha.'
              },
              correctAlternativeIndex: {
                type: Type.INTEGER,
                description: 'O índice da alternativa correta.'
              },
            },
            required: ["question", "shortQuestion", "answer", "alternatives", "correctAlternativeIndex"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const generatedCards = JSON.parse(jsonText);

    if (!Array.isArray(generatedCards) || generatedCards.length === 0) {
      throw new Error("A API não retornou cards válidos.");
    }

    return generatedCards;

  } catch (error) {
    console.error("Erro ao gerar flashcards:", error);
    throw new Error("Não foi possível gerar os cards. Verifique o tópico ou tente novamente.");
  }
};
