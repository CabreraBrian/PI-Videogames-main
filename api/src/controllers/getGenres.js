const axios = require("axios");
const { API_KEY } = process.env;
const URL =  `https://api.rawg.io/api/genres?=${API_KEY}`;

const getGenres = async () => {
    apiGenres = await (axios.get(URL).data)
    
};

module.exports = {getGenres};