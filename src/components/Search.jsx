import { useState } from "react";
import { useGlobalContext } from "../context";
import FilterNav from "./FilterNav";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <>
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
      <FilterNav />
    </>
  );
};
export default Search;
