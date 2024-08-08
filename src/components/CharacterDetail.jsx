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
          <a className="return" href="http://localhost:5173/"> &#171; Volver</a>

          <div className="characters__details">
            <div className="image">
              <img src={character.image}></img>
            </div>
            <div className="info">
              <div>
                <b>Name:</b> {character.name}
              </div>
              <div>
                <b>Especie:</b> {character.species}
              </div>
              <div>
                <b>Planeta:</b> {character.origin.name}
              </div>
              <div>
                <b>Episodios:</b> {character.episode.length}
              </div>
              <div>
                <b>Estado:</b> {character.status}
              </div>
            </div>
          </div>
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
