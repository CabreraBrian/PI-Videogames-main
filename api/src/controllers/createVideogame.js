const { Videogames } = require("../db");

const createVideogame = async (name, description, platforms, image, releaseDate, rating ) => {
    gameCreated = await Videogames.create({name, description, platforms, image, releaseDate, rating});
    return gameCreated;
};

module.exports = {createVideogame}
