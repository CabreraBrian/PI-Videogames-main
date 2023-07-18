require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`;
const { Videogames, Genres, Platforms} = require("../db");
const { oneApiGameCleaner, oneDbGameCleaner } = require("../utils/gamesCleaner")


const findVideogameById = async (id, source) => {
    let videogame = {};

    const game = source === "db" 
    ? 
        await Videogames.findByPk(id, {
        include: [
            {
              model: Genres,
              attributes: ['name'],
              through: { attributes: [] },
            },
            {
              model: Platforms,
              attributes: ['name'],
              through: { attributes: [] },
            },
          ],
        })
    
    : (await axios.get(`${URL}/${id}?key=${API_KEY}`)).data;

    source === "db" 
    ? videogame = oneDbGameCleaner(game)
    : videogame = oneApiGameCleaner(game) 

    return videogame;
};

module.exports = {findVideogameById};