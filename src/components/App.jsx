import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filters";

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
    fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCharacters(data.results || []);
        seterror(data.error ? "No hay resultados" : "");
      });
  };

  return (
    <>
      <h3>Rick Y Morty</h3>
      <Filter update={handleUpdate} />
      {error}
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
