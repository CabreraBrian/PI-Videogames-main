import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css'
import { useState } from 'react';
import { getGameByName } from '../../redux/actions';

const SearchBar= () => {
   const dispatch = useDispatch()
   const [name, setName] = useState("");

   const handleInputChange = (event) => {
      event.preventDefault()
      setName(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(getGameByName(name))
      setName('')
    }

   return (
      <div className={style.contenedor}>
         <input 
         type='text' 
         placeholder="Busque un juego aqui"
         onChange={(event) => handleInputChange(event)}
         // onKeyDown={(event) => handleKeyDown(event)}
         value={name}
         ></input>

         <button
         type='search'
         onClick={(event) => handleSubmit(event)}
         >Buscar</button>
         <button 
         type="submit"
         onClick={(event)=> handleSubmit(event)}
         > X </button>
      </div>
   );
}

export default SearchBar;