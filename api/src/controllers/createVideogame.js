const { Videogames, Genres, Platforms } = require("../db");

const createVideogame = async ( name, description, platforms, image, releaseDate, rating, genres ) => {
    const [gameCreated, created] = await Videogames.findOrCreate({
        where: { name, description, image, releaseDate, rating },
    });

    const genresInDb = await Genres.findAll({ where: { name: genres } });
    await gameCreated.addGenres(genresInDb);

    const platformsInDb = await Platforms.findAll({ where: { name: platforms } });
    await gameCreated.addPlatforms(platformsInDb);

    if (created) {
        return "Videojuego creado con exito"; 
    } else {
        throw Error("El videojuego ya existe")
    }
};

module.exports = { createVideogame };
