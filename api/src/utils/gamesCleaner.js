const { genresFiltered, platformsFiltered } = require("../utils/infoFilters");

const gamesCleaner = (array) => array.map( game=>{
    return {
        id: game.id,
        name: game.name,
        description: game.slug,
        platforms: platformsFiltered(game.platforms),
        image: game.background_image,
        releaseDate: game.released,
        rating: game.rating,
        genres: genresFiltered(game.genres),
        created: false,
    };
});

module.exports = { gamesCleaner };