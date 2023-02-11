import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button className="btn btn-hipster" type="button">
          surprise me!
        </button>
      </form>
    </header>
  );
};
export default Search;
