import style from "./Detail.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, clearDetail } from "../../redux/actions";
import videoBg from "../../assets/videoBg.mp4";
import LoadingG from "../../components/LoadingG/LoadingG"

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.gameDetail);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, []);

  return (
    <div className={style.detail}>
      <video src={videoBg} autoPlay loop muted />
      <div className={style.back}></div>

      <div className={style.contenedor}>
        <div className={style.titulo}>
        <h1>{details.name}</h1>
        <Link to={"/home"}>
          <button className={style.boton}>Regresar</button>
        </Link>
        </div>
        <div className={style.imagenYsyc}>
          { details.image 
          ? <img src={details.image} alt="" />
          : <LoadingG/>
          }

          <div className={style.syc}>

            <div>
            <h2>Fecha de salida:</h2>
            <h3>{details.releaseDate}</h3>
            </div>

            <div>
            <h2>Calificacion: </h2>
            <h3>{details.rating}/5 ⭐ </h3>
            </div>

          </div>

        </div>
        <div className={style.GyP}>
          <div className={style.plataformas}>
            <h4>Plataformas:</h4>
            {details.platforms &&
              details.platforms.map((el) => {
                return <li key={el}>{el}</li>;
              })}
          </div>

          <div className={style.generos}>
            <h4>Generos:</h4>
            {details.genres &&
              details.genres.map((el) => {
                return <li key={el}>{el}</li>;
              })}
          </div>
        </div>

        <div className={style.description}>
          <h2>Descripcion:</h2>
          <p dangerouslySetInnerHTML={{ __html: details.description }}></p>
        </div>

      </div>
    </div>
  );
};

export default Detail;
