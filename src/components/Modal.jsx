import { useGlobalContext } from "../context";

const Modal = () => {
  const {selectMeal} = useGlobalContext();

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h1>Modal Component</h1>
      </div>
    </aside>
  )
  
};
export default Modal;
