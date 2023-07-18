require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env
const { Platforms } = require("../db");
let URL = `https://api.rawg.io/api/platforms?key=${API_KEY}`;

const getApiPlatforms =  async () => {
    let apiPlatforms = [];
    
    while(URL !== null) {
        let infoApi = (await axios.get(`${URL}`)).data;
        let apiPlats =infoApi.results;
        
        apiPlatforms = apiPlatforms.concat(apiPlats.map(plat=> plat.name));
        URL = infoApi.next;
    }
    
    apiPlatforms.forEach(async (plat)=> {
        await Platforms.findOrCreate({
            where: { name: plat }
        });
    })

    return apiPlatforms;
};


module.exports = {getApiPlatforms};