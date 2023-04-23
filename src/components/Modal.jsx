import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const { strMeal: title, strMealThumb: image, strSource: source, strInstructions: description, strCategory: tag } = selectedMeal;
  return (
    <aside className="modal-overlay" onClick={closeModal}>
      <section className="modal-container">
        <img src={image} className="img modal-img" />
        <article className="modal-content">
          <h4>{title}</h4>
          <p>Instructions:</p>
          <p>{description}</p>
          <div>
            <a href={source} target="_blank">Original Source</a>
            <p>{tag}</p>
          </div>
          <button className="close-btn btn btn-hipster" onClick={closeModal}>close</button>
        </article>
      </section>
    </aside>
  )

};
export default Modal;
