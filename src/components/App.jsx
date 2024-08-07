import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filters";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCharacters(data.results);
      });
  }, []);

  const [error, seterror] = useState("");

  const handleUpdate = (query) => {
    localStorage.setItem('searchQuery', query)
    fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCharacters(data.results || []);
        seterror(data.error ? "No hay resultados" : "");
      });
  };

  const { pathname } = useLocation();
  const routeData = matchPath("detail/:id", pathname);
  const id = routeData !== null ? routeData.params.id : "";

  return (
    <>
      <h3>Rick Y Morty</h3>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter update={handleUpdate} />
              {error}
              <CharacterList characters={characters} />
            </>
          }
        />

        <Route path="/detail/:id" element={<CharacterDetail id={id} />} />
      </Routes>
    </>
  );
}

export default App;
