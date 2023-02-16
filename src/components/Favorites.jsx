import { useGlobalContext } from "../context";

const Favorites = () => {

const {selectMeal, favorites,removeFromFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {
            favorites.map((favorite) => {
              const {idMeal,strMealThumb: image,strMeal:title } = favorite
              return (  <div className="favorite-item img">
                  <img id={idMeal} src={image} alt={title} className="favorites-img img"/>
                  <button className="remove-btn" onClick={(idMeal) => removeFromFavorites(idMeal) }>remove</button>
                </div>
            )})
          }
        </div>
      </div>
    </section>
  );
};
export default Favorites;
