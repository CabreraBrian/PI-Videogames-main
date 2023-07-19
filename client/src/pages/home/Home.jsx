import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllGenres,getAllPlatforms,getAllGames,filterGamesByOrigin,orderGames,filterGamesByGender,filterGamsByPlatform} from "../../redux/actions";

import style from "./Home.module.css";
import videoBg from "../../assets/videoBg.mp4";
import Cards from "../../components/Cards/Cards.jsx";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
  }, [dispatch]);

  const allGames = useSelector((state) => state.allGamesCopy);
  const allPlatforms = useSelector((state) => state.allPlatforms);
  const allGenres = useSelector((state) => state.allGenres);

  const [paginaActual, setPaginaActual] = useState(1);
  const juegosPorPagina = 20;

  const indexUltimoGame = paginaActual * juegosPorPagina;
  const indexPrimerGame = indexUltimoGame - juegosPorPagina;

  const juegos = allGames.slice(indexPrimerGame, indexUltimoGame);

  const paginate = (numeroPagina) => setPaginaActual(numeroPagina);

  const originFilter = (event) => {
    dispatch(filterGamesByOrigin(event.target.value))
  }

  const orderFilter = (event) => {
    dispatch(orderGames(event.target.value))
  }

  const genderFilter = (event) => {
    dispatch(filterGamesByGender(event.target.value))
  }

  const platformsFilter = (event) => {
    dispatch(filterGamsByPlatform(event.target.value))
  }

  return (
    <div className={style.home}>
      <video src={videoBg} autoPlay loop muted />
      <div className={style.contenedor}>
        <NavBar />
        <div>
          <select onChange={orderFilter}>
            <option key='id' value='id'> Orden Predeterminado </option>
            <option key='ascendingName' value='ascendingName'>Ordenar por nombre A-Z </option>
            <option key='descendingName' value='descendingName'>Ordenar por nombre Z-A </option>
          </select>

          <select onChange={originFilter}>
              <option value='all'>Mostar Todos</option>
              <option value='database'>Creados</option>
              <option value='api'>Obtenidos de la api</option>
          </select>

          <select onChange={genderFilter}>
            <option value='all'>Todos los Generos</option>
            {allGenres.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
          </select>

          <select onChange={platformsFilter}>
            <option value='all'>Todos las Plataformas</option>
            {allPlatforms.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
          </select>
        </div>

        <div className= {style.paginate}>
          {allGames.length > juegosPorPagina && Array(Math.ceil(allGames.length / juegosPorPagina)).fill().map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
        </div>
        <Cards allGames={juegos} />
      </div>
    </div>
  );
};

export default Home;
