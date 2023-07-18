const { createVideogame } = require ("../controllers/createVideogame");
const { findVideogameById} = require ("../controllers/findVideogameById");
const { findVideogameByName} = require ("../controllers/findVideogameByName");
const { getAllVideogames} = require ("../controllers/getAllVideogames");
const { destroyVideogame } = require ("../controllers/destroyVideogame")

const getVideogames = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const videogameByName = await findVideogameByName(name);
            res.status(200).json(videogameByName);
        } else {
            const allVideogames = await getAllVideogames();
            res.status(200).json(allVideogames);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
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

const postVideogame = async (req, res) => {
    const { name, description, platforms, releaseDate, rating, genres } = req.body;
    try {
        if(!name || !description || !platforms || !releaseDate || !rating || !genres) return res.status(401).send("Faltan datos");
        const videogame = await createVideogame(name, description, platforms, releaseDate, rating, genres);
        res.status(200).json(videogame)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const deleteVideogame =async (req, res) => {
    const {id} = req.params;
    try {
        await destroyVideogame(id)
        res.status(200).json("Videojuego eliminado")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {getVideogames, getVideogameById, postVideogame, deleteVideogame};