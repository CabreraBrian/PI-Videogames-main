require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const { Genre } = require("../db");
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;
const {genresFiltered} = require("../utils/infoFilters")

const getApiGenres =  async () => {
    const infoApi = (await axios.get(`${URL}`)).data.results;
    const apiGenres = genresFiltered(infoApi);
    
    apiGenres.forEach(async (gen)=> {
        await Genre.findOrCreate({
            where: { name: gen },
            defaults: { name: gen },
        });
    })

    return apiGenres;
};


module.exports = {getApiGenres};