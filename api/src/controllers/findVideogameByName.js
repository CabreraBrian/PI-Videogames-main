const { gamesCleaner } = require("../utils/gamesCleaner")
const { api100Games } = require("../utils/apiVideogames")


const { Videogames } = require("../db");

const findVideogameByName = async (name)=>{
    const apiGames = await api100Games();

    const apiGamesCleaned = gamesCleaner(apiGames)

    name = name.toLowerCase()

    const apiGamesF = apiGamesCleaned.filter((game) => game.name.toLowerCase().includes(name));

    const apiGamesFiltered = apiGamesF.slice(0,15);

    const dbGamesFiltered = await Videogames.findAll({where : {name: name}
    });

    const allGamesFilteredByName = [...apiGamesFiltered, ...dbGamesFiltered];

    if(allGamesFilteredByName.length) return allGamesFilteredByName;

    throw new Error("El videojuego no existe");
};

module.exports = {findVideogameByName};