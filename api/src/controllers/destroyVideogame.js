const { Videogames } = require('../db');

const destroyVideogame = async (id) =>{
    await Videogames.destroy({
        where: { id: id },
      })
};

module.exports = { destroyVideogame };