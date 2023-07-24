const { apiGamesCleaner, dbGamesCleaner } = require("../utils/gamesCleaner")
const { api100Games } = require("../utils/apiVideogames")

const { Videogames, Genres, Platforms } = require("../db");

const getAllVideogames = async ()=>{
    const dbGames = await Videogames.findAll({
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
    const apiGamesCleaned = apiGamesCleaner(apiGames);

    allGames = [...apiGamesCleaned, ...dbGamesCleaned];
    return allGames;
};

module.exports = { getAllVideogames };