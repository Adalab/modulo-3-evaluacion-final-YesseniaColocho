import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <>
    
      <Link className="characters__card" to={`/detail/${character.id}`}>
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
