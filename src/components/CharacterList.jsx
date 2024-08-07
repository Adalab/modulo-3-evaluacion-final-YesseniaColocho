import CharacterCard from "./CharacterCard"

function CharacterList({characters}) {
  
console.log(characters)
    return (
      <>
       {characters.map(character=> <CharacterCard key={character.id} character={character} /> )}
      </>
    )
  }
  
  export default CharacterList