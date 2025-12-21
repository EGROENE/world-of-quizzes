import { createContext, type ReactNode } from "react";
import type { TUserContext, TUser } from "../types";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";

// create & export context
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<TUserContext | null>(null);

// export & create context provider
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useLocalStorage<TUser | null>(
    "currentUser",
    null
  );

  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>("isLoggedIn", false);

  // Parallel values
  /* 
  Initialized to corresponding values on TUser. Values used on edit profile form, so may be different than corresponding values until user discards or saved edits.
  */
  const [firstName, setFirstName] = useSessionStorage<string | null>("firstName", null);

  const [lastName, setLastName] = useSessionStorage<string | null>("lastName", null);

  const [username, setUsername] = useSessionStorage<string | null>("username", null);

  const [password, setPassword] = useSessionStorage<string | null>("password", null);

  const [country, setCountry] = useSessionStorage<string | null>("country", null);

  const [interestedCategories, setInterestedCategories] = useSessionStorage<string[]>(
    "interestedCategories",
    []
  );

  const [savedQuizzes, setSavedQuizzes] = useSessionStorage<string[]>(
    "interestedCategories",
    []
  );

  const [profileImage, setProfileImage] = useSessionStorage<string | null>(
    "profileImage",
    null
  );

  const [isPaidMember, setIsPaidMember] = useSessionStorage<boolean>(
    "isPaidMember",
    false
  );

  const userContextValues: TUserContext = {
    isPaidMember,
    setIsPaidMember,
    savedQuizzes,
    setSavedQuizzes,
    profileImage,
    setProfileImage,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    password,
    setPassword,
    country,
    setCountry,
    interestedCategories,
    setInterestedCategories,
  };

  return (
    <UserContext.Provider value={userContextValues}>{children}</UserContext.Provider>
  );
};
