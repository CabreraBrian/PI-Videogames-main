const { apiGamesCleaner, dbGamesCleaner} = require("../utils/gamesCleaner")
const { api100Games } = require("../utils/apiVideogames")
const { Op } = require('sequelize');

const { Videogames, Genres, Platforms } = require("../db");

const findVideogameByName = async (name)=>{

    const dbGames = await Videogames.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name.toLowerCase()}%`,
            }
          },
        include: [
            {
                model: Genres,
                attributes: ['name'],
                through: { attributes: [] },
            },
            {
                model: Platforms,
                attributes: ['name'],
                through: { attributes: [] },
            },
        ],
    });

    const dbGamesCleaned = dbGamesCleaner(dbGames)

    const apiGames = await api100Games();
    const apiGamesFiltered = apiGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
    const apiGames15 = apiGamesFiltered.slice(0,15);
    const apiGamesCleaned = apiGamesCleaner(apiGames15)

    const allGamesFilteredByName = [...apiGamesCleaned, ...dbGamesCleaned];

    if(allGamesFilteredByName.length) return allGamesFilteredByName;
    else return ["No Hay videojuegos con ese nombre"]

    throw new Error("El videojuego no existe");
};

module.exports = {findVideogameByName};