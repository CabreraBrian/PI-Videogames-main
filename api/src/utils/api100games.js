require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games?key=`;

const api100games = async () => {
    let games100 = [];
    let urlg = `${URL}${API_KEY}`;
    
    while(games100.length < 100) {
        const data = (await axios.get(urlg)).data;
        games100 = games100.concat(data.results)
        urlg = data.next;
    }
    return games100;
};

module.exports = {api100games}