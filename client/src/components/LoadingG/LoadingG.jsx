import gif from "../../assets/loadingG.gif"
import style from "./LoadingG.module.css"

const LoadingG = () => {
  return (
    <div className={style.contenedor}>
        <img src={gif} alt="loadingG"/>
    </div>
  )
}

export default LoadingG