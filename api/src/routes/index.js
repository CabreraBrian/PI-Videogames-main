const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getVideogames, getVideogameById, getVideogameByName, postVideogame} = require("../handlers/videogamesHandler")
const {getGenres} = require("../handlers/genresHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);

router.get("/videogames/:id", getVideogameById);

router.get("/videogames/name?=", getVideogameByName);

router.post("/videogames", postVideogame);

router.get("/genres", getGenres);


module.exports = router;
