import { useState, createContext, type ReactNode } from "react";
import type { TAnswer, TQuiz, TQuizContext } from "../types";

// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext<TQuizContext | null>(null);

export const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuiz, setCurrentQuiz] = useState<TQuiz | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState<TAnswer | null>(null);

  const quizContextValues: TQuizContext = {
    currentQuiz,
    setCurrentQuiz,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={quizContextValues}>{children}</QuizContext.Provider>
  );
};
