require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const { Genres } = require("../db");
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getApiGenres =  async () => {
    const infoApi = (await axios.get(`${URL}`)).data.results;
    const apiGenres = infoApi.map(genre=> genre.name);
    
    apiGenres.forEach(async (gen)=> {
        await Genres.findOrCreate({
            where: { name: gen },
        });
    })

    return apiGenres;
};


module.exports = {getApiGenres};