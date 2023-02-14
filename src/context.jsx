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

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(true);
  //fetch data from an url, and print it. we call the function in the use effect hook, passing a 2nd parameter an [] that executes the code every time that the component is mounted
  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      if (response.data.meals) {
        setMeals(response.data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  };

  //loads all the meals when the component is loaded
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  // every time that the search value changes, we fetch the data of meals
  useEffect(() => {
    //the condition cuts the execution to avoid change the state of searchTerm and avoid also the re-render
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);
  return (
    //pass the array meals to the entire app
    <AppContext.Provider
      value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal}}>
      {children} 
    </AppContext.Provider>
  );
};

//create a hook to import context in every component that you want to
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
