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

    const handleReset = ()=>{
      dispatch(getGameByName(""))
    }

   return (
      <div className={style.contenedor}>

         <input
         type='text' 
         placeholder="Busque un juego aqui"
         onChange={(event) => handleInputChange(event) }
         value={name}
         ></input>

         <button
         className={style.boton}
         type='search'
         onClick={(event) => handleSubmit(event)}
         >Buscar</button>

         <button 
         className={style.reset}
         type="submit"
         onClick={()=> handleReset()}
         > X </button>

      </div>
   );
}

export default SearchBar;