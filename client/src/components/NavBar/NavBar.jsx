import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link } from "react-router-dom"
import logo from "../../assets/levelUp.png"
// import {getIndieAndPlatforms} from "../../redux/actions"
// import {useDispatch } from "react-redux"

const NavBar = () => {
  // const dispatch = useDispatch();


  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   dispatch(getIndieAndPlatforms())
  // }

  return (
    <div className= {style.navBar}>

      <img className={style.levelUp} src={logo}></img>

      <SearchBar/>

      <div>
      <Link to={"/"}>
      <button className={style.boton}>Salir</button>
      </Link>
      <Link to={"/creategame"}>
      <button className={style.boton}>Crear</button>
      </Link>
      </div>
      {/* <button type="submit" onClick={(event)=> handleSubmit(event)}>indie y plataformas</button> */}
    </div>
  )
}

export default NavBar