const { apiGamesCleaner, dbGamesCleaner} = require("../utils/gamesCleaner")
const { api100Games } = require("../utils/apiVideogames")
const { Sequelize } = require('sequelize');

const { Videogames } = require("../db");

const findVideogameByName = async (name)=>{

    name = name.toLowerCase()

    const dbGames = await Videogames.findAll({
        where : {
            name: {
                [Sequelize.Op.like]: `%${name.toLowerCase()}%`,
            }
        }
    },
    {
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
    const apiGamesFiltered = apiGames.filter((game) => game.name.toLowerCase().includes(name));
    const apiGames15 = apiGamesFiltered.slice(0,15);
    const apiGamesCleaned = apiGamesCleaner(apiGames15)

    const allGamesFilteredByName = [...apiGamesCleaned, ...dbGamesCleaned];

    if(allGamesFilteredByName.length) return allGamesFilteredByName;

    throw new Error("El videojuego no existe");
};

module.exports = {findVideogameByName};