import { useGlobalContext } from "../context";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const Meals = () => {
  //passing the context to the component
  const { meals, loading, selectMeal, addFavorites, favoriteMealSelected, isFavorite } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading... </h4>
      </section>
    );
  }
  if (meals.length < 1)
    return (
      <h4 className="section">
        No meals matched with your search. Please, try again
      </h4>
    );
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} className="img" onClick={() => { selectMeal(idMeal) }} />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn" onClick={() => { addFavorites(idMeal) }}
                style={{ color: isFavorite(idMeal) ? "red" : "" }} >
                <FaRegThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section >
  );
};
export default Meals;
