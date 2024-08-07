function CharacterCard({character}) {
  

    return (
      <>
       <div>
        <img src={character.image}></img>
       </div>

       <div>
        {character.name}
       </div>
       <div>
        {character.species}
       </div>
      </>
    )
  }
  
  export default CharacterCard