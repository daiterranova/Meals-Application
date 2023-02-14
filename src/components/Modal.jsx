import { useGlobalContext } from "../context";

const Modal = () => {
  const {selectedMeal, closeModal} = useGlobalContext();

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h1>Modal Component</h1>
        <button onClick={closeModal}>x</button>
      </div>
    </aside>
  )
  
};
export default Modal;
