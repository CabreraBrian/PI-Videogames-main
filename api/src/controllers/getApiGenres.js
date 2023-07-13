require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const { Genres } = require("../db");
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;
const {genresFiltered} = require("../utils/infoFilters")

const getApiGenres =  async () => {
    const infoApi = (await axios.get(`${URL}`)).data.results;
    const apiGenres = genresFiltered(infoApi);
    
    apiGenres.forEach(async (genre)=> {
        await Genres.findOrCreate({
            where: { name: genre },
            defaults: { name: genre, created: false },
        });
    })

    return apiGenres;
};


module.exports = {getApiGenres};