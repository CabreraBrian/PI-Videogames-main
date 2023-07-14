const { gamesCleaner } = require("../utils/gamesCleaner")
const { api100Games } = require("../utils/apiVideogames")

const { Videogame } = require("../db");

const getAllVideogames = async ()=>{
    const dbGames = await Videogame.findAll();
    const apiGames = await api100Games();

    apiGamesCleaned = gamesCleaner(apiGames)

    allGames = [...dbGames, ...apiGamesCleaned]
    return allGames;
};

module.exports = {getAllVideogames};