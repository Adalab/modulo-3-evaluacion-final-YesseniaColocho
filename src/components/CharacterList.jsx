import CharacterCard from "./CharacterCard"

function CharacterList({characters}) {
  
console.log(characters)
    return (
      <>
      <div className="characters__arrey">
       {characters.map(character=> <CharacterCard key={character.id} character={character} /> )}
       </div>
      </>
    )
  }
  
  export default CharacterList