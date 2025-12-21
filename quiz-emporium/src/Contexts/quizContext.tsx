import { useState, createContext, type ReactNode } from "react";
import useLocalStorage from "use-local-storage";

// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext<TQuizContext | null>(null);

export const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const isDefaultDarkTheme: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage<"dark" | "light">(
    "theme",
    !isDefaultDarkTheme ? "light" : "dark"
  );
  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const quizContextValues: TQuizContext = {
    toggleTheme,
  };

  return (
    <QuizContext.Provider value={quizContextValues}>{children}</QuizContext.Provider>
  );
};
