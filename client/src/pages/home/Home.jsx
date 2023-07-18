import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../redux/actions/index";

import style from "./Home.module.css";
import videoBg from "../../assets/videoBg.mp4";
import Cards from "../../components/Cards/Cards.jsx"

const Home = () => {

  const dispatch = useDispatch();
  const allGames = useSelector((state)=>state.allGames);

  useEffect(()=>{
    dispatch(getAllGames())
  },[dispatch])

  return (
    <div className={style.home}>
      {/* <video src={videoBg} autoPlay loop muted /> */}
      <div className= {style.contenedor}>
        <h1>Home</h1>
        <Cards allGames = {allGames} />
      </div>
    </div>
  )
}

export default Home;