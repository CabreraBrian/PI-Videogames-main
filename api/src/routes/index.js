const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getVideogames, getVideogameById, postVideogame, deleteVideogame} = require("../handlers/videogamesHandler")
const { getGenres } = require("../handlers/genresHandler");
const { getPlatforms } = require("../handlers/platformsHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);

router.get("/videogames/:id", getVideogameById);

router.post("/videogames", postVideogame);

router.delete("/videogames/:id", deleteVideogame);

router.get("/genres", getGenres);

router.get("/platforms", getPlatforms);


module.exports = router;
