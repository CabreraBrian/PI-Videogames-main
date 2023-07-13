const { api100games } = require("../utils/api100games")
const { genresFiltered, platformsFiltered} = require("../utils/infoFilters")

const { Videogames } = require("../db");


const apiVideogamesCleaner = (apigames) =>{
    apigames.map((game) => {
        return {
            name: game.name,
            description: game.slug,
            platforms: game.platforms,
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
            genres: game.genres,
        }
    })
};

const getAllVideogames = async ()=>{
    // const dbVideogames = await Videogames.findAll();
    const apigames = api100games();

    return apiGamesClean = apiVideogamesCleaner(apigames)
}

module.exports = {getAllVideogames};