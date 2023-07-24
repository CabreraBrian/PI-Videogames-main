import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getAllPlatforms } from "../../redux/actions";
import { Link } from "react-router-dom";
import createBg from "../../assets/createBg.gif";
import axios from "axios";
import style from "./Create.module.css";

const Create = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
  }, [dispatch]);
  
  const allPlatforms = useSelector((state) => state.allPlatforms);
  const allGenres = useSelector((state) => state.allGenres);

  const [genresSelected, setGenresSelected] = useState([]);
  const [platformsSelected, setPlatformsSelected] = useState([]);
  
  const [input, setInput] = useState(
    {
      name: "",
      description: "",
      releaseDate: "",
      rating: "",
      genres: [],
      platforms: [],
    }
  );

  const [errors, setErrors] = useState(
    {
      name: "Obligatorio",
      description: "Obligatorio",
      releaseDate: "Obligatorio",
      rating: "Obligatorio",
      genres: ["Debe tener minimo 1 genero"],
      platforms: ["debe tener minimo 1 plataforma"],
    }
  );

  const validateName = (input) =>{
    if(input.name === "") {
      setErrors({...errors, name:"Obligatorio"})
      return
    }
    setErrors({...errors, name: ""})
  }
  const handleName = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validateName({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const validateDescription = (input) =>{
    if(input.description === "") {
      setErrors({...errors, description:"Obligatorio"})
      return
    }
    setErrors({...errors, description: ""})
  }
  const handleDescription = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validateDescription({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const validateRating = (input) =>{
    if(input.rating === "") {
      setErrors({...errors, rating:"Obligatorio"})
      return
    }
    setErrors({...errors, rating: ""})
  }
  const handleRating = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validateRating({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const validateReleaseDate = (input) =>{
    if(input.releaseDate === "") {
      setErrors({...errors, releaseDate:"Obligatorio"})
      return
    }
    setErrors({...errors, releaseDate: ""})
  }
  const handleReleaseDate = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validateReleaseDate({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const validateGenres = (data) =>{
    if(data.length === 0 ) {
      setErrors({...errors, genres:["Debe tener minimo 1 genero"]})
      return
    }
    setErrors({...errors, genres: []})
  }
  const handleGenres = (e)=>{
    if (genresSelected.includes(e.target.value))
    {
     const genresFiltered = genresSelected.filter( genre => genre !== e.target.value)
      setGenresSelected(genresFiltered)
      setInput({
        ...input,
        genres: genresFiltered
      })
      validateGenres(genresFiltered)

    } else {
      genresSelected.push(e.target.value)
      setInput({
        ...input,
        genres: genresSelected
      })
      validateGenres(genresSelected)
    }
  }



  const validatePlatforms = (data) =>{
    if(data.length === 0) {
      setErrors({...errors, platforms:"Debe tener minimo 1 plataforma"})
      return
    }
    setErrors({...errors, platforms: []})
  }
  const handlePlatforms = (e)=>{
    if (platformsSelected.includes(e.target.value))
    {
      const platformsFiltered = platformsSelected.filter( platform => platform !== e.target.value)
      setPlatformsSelected(platformsFiltered)
      setInput({
        ...input,
        platforms: platformsFiltered
      })
      validatePlatforms(platformsFiltered)
    } else {
      platformsSelected.push(e.target.value)
      setInput({
        ...input,
        platforms: platformsSelected
      })
      validatePlatforms(platformsSelected)
    }
  }



  const resetG = (e) =>{
    e.preventDefault()
    setInput({
      ...input,
      genres:[]
    })
    setGenresSelected([])
    validateGenres([])
  }

  const resetP = (e) =>{
    e.preventDefault()
    setInput({
      ...input,
      platforms:[]
    })
    setPlatformsSelected([])
    validatePlatforms([])
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/videogames",input)
      alert(`El videojuego ${input.name} se creo exitosamente`)
    } catch (error) {
      alert(`El videojuego ya existe`)
    }
  }

  return (
    <div className={style.page}>
      <img className={style.bg} src={createBg}></img>

      <form className={style.form} onSubmit={handleSubmit}>

        <h1>Crea tu Videojuego</h1>
        <div className={style.input}>
          <h3>Nombre:</h3>
          <input name="name" type="text" placeholder="Escriba el nombre aqui..." value={input.value} onChange={handleName}/>
          <span>{errors.name}</span>
        </div>

        <div className={style.input}>
        <h3>Descripcion:</h3>
          <textarea className={style.textarea} name="description" placeholder="Escriba la descripcion aqui..." value={input.value} onChange={handleDescription}/>
          <span>{errors.description}</span>
        </div>

        <div className={style.input}>
          <h3>Calificacion:</h3>
          <div className={style.inputR}>
            <input name="rating" type="range" min="0" max="5" step="0.1" value={input.value} onChange={handleRating}/>
            <p>{input.rating ? input.rating : "?"}/5⭐</p>
          </div>
          <span>{errors.rating}</span>
        </div>

        <div className={style.input}>
          <h3>Fecha de salida:</h3>
          <input name="releaseDate" type="date" value={input.value} onChange={handleReleaseDate} />
          <span>{errors.releaseDate}</span>
        </div>

        <div className={style.input}>
          <h3>Generos:</h3>
          <div className={style.inputR}>
            <select onChange={handleGenres}>
              {allGenres.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
            </select>
            {input.genres.length ? <button onClick={resetG}>X</button> : null}
          </div>
          <p>{input.genres.join(", ")}</p>  
          <span>{errors.genres}</span>
        </div>
      
        <div className={style.input}>
          <h3>Plataformas</h3>
          <div className={style.inputR}>
            <select onChange={handlePlatforms}>
              {allPlatforms.map((item,index)=>{ return( <option key={index} value={item}> {item} </option>)})}
            </select>
            { input.platforms.length ? <button onClick={resetP}>X</button> : null}
          </div>
          <p>{input.platforms.join(", ")}</p>
          <span>{errors.platforms}</span>
        </div>

        {
          errors.name || errors.description || errors.rating || errors.releaseDate || errors.genres.length || errors.platforms.length 
          ? <div className={style.final}>
              <h5>Llene todos los campos para continuar o </h5>
              <Link to="/home">
                <button>Regrese al inicio</button>
              </Link>
            </div> 
          : <div className={style.final}>
              <button type="submit">Cree su videojuego</button> o 
              <Link to="/home">
                <button type="">regrese al inicio</button>
              </Link>
            </div>
        } 

      </form>

    </div>
  );
};

export default Create;