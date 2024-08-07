import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <>
      <Link to={`/detail/${character.id}`}>
        <div>
          <img src={character.image}></img>
        </div>

        <div>{character.name}</div>
        <div>{character.species}</div>
      </Link>
    </>
  );
}

export default CharacterCard;
