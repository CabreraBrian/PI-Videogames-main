require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`;
const { Videogame, Genre } = require("../db");
const { genresFiltered, platformsFiltered } = require("../utils/infoFilters")


const findVideogameById = async (id, source) => {
    let game = source === "db" 
    ? await Videogame.findByPk(id)

    : (await axios.get(`${URL}/${id}?key=${API_KEY}`)).data

    if (source === "api") {
        game = {
            name: game.name,
            description: game.description_raw,
            platforms: platformsFiltered(game.platforms),
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
            genres: genresFiltered(game.genres),
        };
    };
    return game;
};

module.exports = {findVideogameById};