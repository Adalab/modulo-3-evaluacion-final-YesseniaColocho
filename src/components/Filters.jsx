
function Filter({update}) {
  
  const handleSumit = (e)=>{
    e.preventDefault()
  }

    return (
      <>
       <form onSubmit={handleSumit}>
        <input className="input" type="text" placeholder="Busca un personaje" value={localStorage.getItem('searchQuery')} onChange={(e)=> update(e.target.value.toLowerCase())} />
       </form>
      </>
    )
  }
  
  export default Filter
  