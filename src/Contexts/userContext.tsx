// create & export context
import { createContext, type ReactNode } from "react";
import { TUserContext, TUser } from "../types";
import { useLocalStorage } from "usehooks-ts";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<TUserContext | null>(null);

// export & create context provider
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useLocalStorage<TUser | null>(
    "currentUser",
    null
  );

  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>("isLoggedIn", false);

  const userContextValues: TUserContext = {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={userContextValues}>{children}</UserContext.Provider>
  );
};
