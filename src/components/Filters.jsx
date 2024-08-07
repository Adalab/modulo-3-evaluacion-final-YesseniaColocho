
function Filter({update}) {
  
  const handleSumit = (e)=>{
    e.preventDefault()
  }

    return (
      <>
       <form onSubmit={handleSumit}>
        <input type="text" placeholder="Busca un personaje" onChange={(e)=> update(e.target.value) } />
       </form>
      </>
    )
  }
  
  export default Filter
  