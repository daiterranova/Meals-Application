import { useContext } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "john", role: "student" }}>
      {children}
    </AppContext.Provider>
  );
};

//create a hook to import context in every component that you want to
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
