import style from "./Card.module.css"
import { Link } from 'react-router-dom';


const Card = ({id, name, description, image, releaseDate, rating, genres, platforms, created}) => {
  return (
    <div className= {style.contenedor}>
        <Link to={`/detail/${id}`}>
          <img src={image} alt="game-image"/>
        </Link>
        <h1>{name}</h1>
      </div>
  )
}

export default Card