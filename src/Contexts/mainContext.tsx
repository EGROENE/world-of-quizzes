import { useState, createContext, type ReactNode } from "react";
import type { TMainContext } from "../types";
import { useLocalStorage } from "usehooks-ts";

// eslint-disable-next-line react-refresh/only-export-components
export const MainContext = createContext<TMainContext | null>(null);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
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

  const mainContextValues: TMainContext = {
    toggleTheme,
  };

  return (
    <MainContext.Provider value={mainContextValues}>{children}</MainContext.Provider>
  );
};
