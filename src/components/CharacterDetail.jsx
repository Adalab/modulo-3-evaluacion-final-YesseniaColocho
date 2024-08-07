import { useEffect, useState } from "react";

function CharacterDetail({ id }) {
  const [character, setcharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setcharacter(data);
      });
  }, []);

  return (
    <>
      {character && !character.error ? (
        <>
          <img src={character.image}></img>
          <div>{character.name}</div>
          <div>{character.species}</div>
          <div>{character.origin.name}</div>
          <div>{character.episode.length}</div>
          <div>{character.status}</div>
        </>
      ) : character && character.error ? (
        "El personaje que buscas no existe aún..."
      ) : (
        "Ha ocurrido un error"
      )}
    </>
  );
}

export default CharacterDetail;
