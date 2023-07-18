const { Videogames, Genres, Platforms } = require("../db");

const createVideogame = async ( name, description, platforms, releaseDate, rating, genres ) => {
    const [gameCreated, created] = await Videogames.findOrCreate({
        where: { 
            name, 
            description, 
            image:"https://img1.freepng.es/20180325/gee/kisspng-playstation-4-joystick-playstation-3-game-controll-joystick-5ab72ee27a7e67.6136780815219545305017.jpg", 
            releaseDate, 
            rating },
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
