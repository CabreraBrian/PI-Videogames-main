require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`;

const { Videogames } = require("../db");

const findVideogameById = async (id, source) => {
    const game = source === "api" 
        ? (await axios.get(`${URL}/${id}?key=${API_KEY}`)).data 
        : await Videogames.findByPk(id);
    return game;
};

module.exports = {findVideogameById};