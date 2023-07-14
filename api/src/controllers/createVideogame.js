const { Videogame, Genre } = require("../db");

const createVideogame = async ( name, description, platforms, image, releaseDate, rating, genres ) => {
    const [gameCreated, created] = await Videogame.findOrCreate({
        where: { name: name },
        defaults: {
            name,
            description,
            platforms,
            image,
            releaseDate,
            rating,
            genres
        }
    });
    
    genres.forEach(async (element) => {
        const [dbGenre, created] = await Genre.findOrCreate({
            where: { name: element },
            defaults: { name: element }, 
        });
        await gameCreated.addGenre(dbGenre);
    });

    if (created) {
        return gameCreated; 
    } else {
        throw Error("Videogame already exist")
    }
};

module.exports = { createVideogame };
