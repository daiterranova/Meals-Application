import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTeam, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTeam(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchTeam("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="header search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={text}
          placeholder="type your favorite meal"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={handleRandomMeal}>
          surprise me!
        </button>
      </form>
    </header>
  );
};
export default Search;
