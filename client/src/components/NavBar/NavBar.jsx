import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className= {style.navBar}>
      <Link to={"/"}>
      <button>Salir</button>
      </Link>
      <SearchBar/>
      <Link to={"/creategame"}>
      <button>Crear Videojuego</button>
      </Link>

    </div>
  )
}

export default NavBar