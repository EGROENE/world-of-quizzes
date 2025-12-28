import mongoose from "mongoose";

export type TUser = {
  _id?: string | mongoose.Types.ObjectId;
  lastLogin: number;
  profileImage: string | null;
  index: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  password: string | undefined;
  country: string;
  paidMember: boolean;
  interestedCategories: string[];
  savedQuizzes: TQuiz[];
  createdQuizzes: TQuiz[];
  completedQuizzes: TQuiz[];
};

export type TUserContext = {
  isPaidMember: boolean;
  setIsPaidMember: React.Dispatch<React.SetStateAction<boolean>>;
  savedQuizzes: string[];
  setSavedQuizzes: React.Dispatch<React.SetStateAction<string[]>>;
  profileImage: string | null;
  setProfileImage: React.Dispatch<React.SetStateAction<string | null>>;
  currentUser: TUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  firstName: string | null;
  setFirstName: React.Dispatch<React.SetStateAction<string | null>>;
  lastName: string | null;
  setLastName: React.Dispatch<React.SetStateAction<string | null>>;
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  password: string | null;
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  country: string | null;
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
  interestedCategories: string[];
  setInterestedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export type TAnswer = {
  text: string;
  isCorrect: boolean;
  explanation: string;
};

export type TQuestion = {
  question: string;
  answers: TAnswer[];
};

export type TQuiz = {
  name: string;
  questions: TQuestion[];
  categories: string[];
};

export type TQuizContext = {
  currentQuiz: TQuiz | null;
  setCurrentQuiz: React.Dispatch<React.SetStateAction<TQuiz | null>>;
  currentQuestion: TAnswer | null;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<TAnswer | null>>;
};

export type TMainContext = {
  toggleTheme: () => void;
};
