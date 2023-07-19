import style from "./Card.module.css"
import { Link } from 'react-router-dom';


const Card = (params) => {
  return (
    <div className= {style.contenedor}>
    <Link to={`/detail/${params.id}`}>
      <img src={params.image} alt="game"/>
    </Link>
    <h1>{params.name}</h1>
    </div>
  )
}

export default Card