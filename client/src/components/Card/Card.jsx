import style from "./Card.module.css"
import { Link } from 'react-router-dom';


const Card = ({id, name, description, image, releaseDate, rating, genres, platforms, created}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className= {style.contenedor}>
        <img src={image} alt="game-image"/>
        <h1>{name}</h1>
      </div>
    </Link>
  )
}

export default Card