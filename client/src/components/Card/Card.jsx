import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteGame} from "../../redux/actions";

const Card = (params) => {
  const dispatch = useDispatch()

  const handleClick = async (e) =>{
    dispatch(deleteGame(params.id))
  }

  return (
    <div className={style.contenedor}>
      <Link to={`/detail/${params.id}`}>
        <img src={params.image} alt="game" />
      </Link>

      <div>
        <h5>{params.name}</h5>
        <h5>{params.rating}/5⭐</h5>
        <h5>{params.releaseDate}</h5>
        {params.created === true ? <button className={style.close} onClick={handleClick}>Eliminar Juego</button> : null}
      </div>
    </div>
  );
};

export default Card;
