import { useState, useContext, useEffect } from "react";
import React from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  //initiliaze loading to false
  const [loading, setLoading] = useState(false);

  //we use an empty array because we will be iterating over an array of meals
  const [meals, setMeals] = useState([]);

  //fetch data from an url, and print it. we call the function in the use effect hook, passing a 2nd parameter an [] that executes the code every time that the component is mounted
  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      setMeals(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);
  return (
    //pass the array meals to the entire app
    <AppContext.Provider value={{ meals, loading }}>
      {children}
    </AppContext.Provider>
  );
};

//create a hook to import context in every component that you want to
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
