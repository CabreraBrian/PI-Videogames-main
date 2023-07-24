import style from "./Landing.module.css"
import { Link } from 'react-router-dom';
import videoBg from "../../assets/videoBg.mp4"
import videogameImage from "../../assets/videogame.png"
import mario from "../../assets/mario.gif"
import sonic from "../../assets/sonic.gif"
import logo from "../../assets/levelUp.png"


const Landing = () => {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted />
      <div className={style.contenedor}>


        <div className={style.contenedor_secundario}>
        <img className={style.levelUp} src={logo}></img>

          <div className={style.content}>
            <div className={style.texto}>
              <h1>Preparate para descubrir el increible mundo de los Videojuegos a travez de LevelUp!</h1>
              <h2>Busca tus videojuegos favoritos, crea tus propios videojuegos y filtralos como quieras!</h2>
            </div>
            <img className= {style.marioG} src={videogameImage} alt='imagen' ></img>
          </div>

          <div className= {style.contenedor_terciario}>
            <h3>Miles de juegos te esperan no seas timido!</h3>
            <div className={style.butonBar}>
              <img className= {style.mario} src={mario} alt='marioC' ></img>
              <Link to="/home"> <button className={style.botonEntrar}>Entrar a LevelUp!!</button> </Link>
              <img className= {style.sonic} src={sonic} alt='sonic' ></img>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Landing