import { useContext, useEffect } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //fetch data from an url, and print it. we call the function in the use effect hook, passing a 2nd parameter an [] that executes the code every time that the component is mounted
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
