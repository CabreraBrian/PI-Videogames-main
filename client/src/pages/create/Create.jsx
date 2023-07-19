import React, { useState } from 'react'

const Create = () => {
  const [input, setInput]= useState({
    name:"",
    description:"",
    releaseDate:"",
    rating:"",
    genres:[],
    platforms:[],

  })

  const handleChange = (e) =>{
    setInput({
      ...input,
      [e.target.name]:e.target.value})
  }


  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre</label>
          <input type="text" name='name' value={input.value} onChange={handleChange}/>
        </div>        
        <div>
          <label>Descripcion</label>
          <input type="text" name='description' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Fecha de Lanzamiento</label>
          <input type="text" name='releaseDate' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Rating</label>
          <input type="text" name='rating' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Generos</label>
          <input type="text" name='genres' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Plataformas</label>
          <input type="text" name='platforms' value={input.value} onChange={handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default Create