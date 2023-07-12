const { createVideogame } = require ("../controllers/createVideogame");
const { findVideogameById} = require ("../controllers/findVideogameById");
const { findVideogameByName} = require ("../controllers/findVideogameByName");
const { getallVideogames} = require ("../controllers/getAllVideogames");

const getVideogames = (req, res) => {
    console.log("hola");
};

const getVideogameById = async (req, res) => {
    const {id} = req.params;

    const source = isNaN(id) ? "db" : "api";
    try {
        const response = await findVideogameById(id, source);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getVideogameByName = (req, res) => {
    console.log("hola");
};

const postVideogame = async (req, res) => {
    const { name, description, platforms, image, releaseDate, rating } = req.body;
    if(!name || !description || !platforms || !image || !releaseDate || !rating) return res.status(401).send("Faltan datos");
    try {
        const response = await createVideogame(name, description, platforms, image, releaseDate, rating);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {getVideogames, getVideogameById, getVideogameByName, postVideogame};