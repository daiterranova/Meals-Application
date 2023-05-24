import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const Meals = () => {
  //passing the context to the component
  const { meals, loading, selectMeal, addFavorites, favoriteMealSelected, isFavorite, removeFromFavorites } = useGlobalContext();
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

  const handleFavoriteMeal = (idMeal) => { isFavorite(idMeal) ? removeFromFavorites(idMeal) : addFavorites(idMeal) }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image, strCategory: category } = meal;
        return (
          <article key={idMeal} className="single-meal">
            <div>
              <p className="tag text-small">{category}</p>
              <img src={image} className="image" onClick={() => { selectMeal(idMeal) }} />
            </div>

            <footer>
              <h5>{title}</h5>
              <button className="like-btn" onClick={() => { handleFavoriteMeal(idMeal) }}
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
