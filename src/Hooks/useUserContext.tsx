import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";

export const useMainContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used inside the MainContext provider.");
  }
  return context;
};
