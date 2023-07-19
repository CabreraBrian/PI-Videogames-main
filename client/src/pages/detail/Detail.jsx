import style from "./Detail.module.css"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, clearDetail } from "../../redux/actions";
import videoBg from "../../assets/videoBg.mp4"



const Detail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const details = useSelector((state)=> state.gameDetail)
  
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetail())
    }
  },[dispatch]);
  

  return (
    <div className={style.detail}>
      <video src={videoBg} autoPlay loop muted />

      <div className={style.info}>
        <h1>{details.name}</h1>
        <div className={style.contentImg}>
          <img src={details.image} alt='' />
        </div>
        
        <div className={style.infoText}>
          <h2>Descripcion:</h2>
          <p dangerouslySetInnerHTML={{ __html: details.description }}></p>

          <div className={style.generos}>
            <h2>Generos:</h2>
            {details.genres &&
              details.genres.map((el) => {
                return <li key={el}>{el}</li>;
              })}
          </div>

          <div className={style.plataformas}>
            <h2>Plataformas:</h2>
            {details.platforms &&
              details.platforms.map((el) => {
                return <li key={el}>{el}</li>;
              })}
          </div>

          <h2>Fecha de lanzamiento: {details.releaseDate}</h2>
          <h2>Calificacion: {details.rating}</h2>
          <Link to={"/home"}>
              <button className={style.boton}>Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail