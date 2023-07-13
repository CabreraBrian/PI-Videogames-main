const { Videogames, Genres } = require("../db");

const createVideogame = async (name, description, platforms, image, releaseDate, rating, genres ) => {
    const [gameCreated, created] = await Videogames.findOrCreate({
        where: {name: name},
        defaults: { 
            name, 
            description, 
            platforms, 
            image, 
            releaseDate, 
            rating,
        },
    });

    genres.forEach(async (genre)=> {
        const genreCreated = await Genres.findOrCreate({
            where: { name: genre },
            defaults: { name: genre }, 
        });
        // await gameCreated.addGenres(genreCreated);
    })

    if (created) {
        return gameCreated;
    } else {
        throw Error("El videojuego ya existe")
    }    
};

module.exports = {createVideogame}
