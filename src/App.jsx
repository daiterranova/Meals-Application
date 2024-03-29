import { useState } from "react";
import React from "react";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

import Search from "./components/Search";
import { useGlobalContext } from "./context";
import "./App.css";
import FilterNav from "./components/FilterNav";

function App() {

  const { favorites, showModal } = useGlobalContext();

  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <FilterNav />
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
