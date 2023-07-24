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

  const [currentPage, setCurrentPage] = useState(1);
  const gamesForPage = 20;

  const lastGameIndex = currentPage * gamesForPage;
  const fisrtGameIndex = lastGameIndex - gamesForPage;

  const juegos = allGames.slice(fisrtGameIndex, lastGameIndex);

  const paginate = (numeroPagina) => setCurrentPage(numeroPagina);

  const originFilter = (event) => {
    dispatch(filterGamesByOrigin(event.target.value))
    setCurrentPage(1)
  }

  const orderFilter = (event) => {
    dispatch(orderGames(event.target.value))
    setCurrentPage(1)

  }

  const genderFilter = (event) => {
    dispatch(filterGamesByGender(event.target.value))
    setCurrentPage(1)

  }

  const platformsFilter = (event) => {
    dispatch(filterGamsByPlatform(event.target.value))
    setCurrentPage(1)

  }

  return (
    <div className={style.home}>
      <video src={videoBg} autoPlay loop muted />
      <div className={style.contenedor}>
        <NavBar />
        <div className={style.filtros}>

          <div>
          <span> Ordenar: </span>
          <select onChange={orderFilter}>
            <option key='ascendingName' value='ascendingName'>Ordenar por nombre A-Z </option>
            <option key='descendingName' value='descendingName'>Ordenar por nombre Z-A </option>
          </select>
          </div>

          <div>
          <span> Origen: </span>
          <select onChange={originFilter }>
              <option value='all'>Mostar Todos</option>
              <option value='database'>Creados</option>
              <option value='api'>Obtenidos de la api</option>
          </select>
          </div>

          <div>
          <span> Generos: </span>
          <select onChange={genderFilter }>
            <option value='all'>Todos los Generos</option>
            {allGenres.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
          </select>
          </div>

          <div>
          <span> Plataformas: </span>
          <select onChange={platformsFilter }>
            <option value='all'>Todos las Plataformas</option>
            {allPlatforms.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
          </select>
          </div>

        </div>

        <div className= {style.paginate}>
          {allGames.length > gamesForPage && Array(Math.ceil(allGames.length / gamesForPage)).fill().map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
        </div>
        {juegos.length === "No Hay videojuegos con ese nombre"
        ? <h1> {juegos[0]} </h1> && setCurrentPage(1)
        : <Cards allGames={juegos} /> 
      }
      </div>
    </div>
  );
};

export default Home;
