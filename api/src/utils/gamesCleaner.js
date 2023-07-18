const oneApiGameCleaner = (game) => {

    const getDescription = () => {
        if (game.description_raw) return game.description_raw;
        return game.slug;
    }

    let GameCleaned = {
        id: game.id,
        name: game.name,
        description: getDescription(),
        image: game.background_image,
        releaseDate: game.released,
        rating: game.rating,
        genres: game.genres.map(genre=>genre.name),
        platforms: game.platforms.map(plat=>plat.platform.name),
        created: false,
    };
    return GameCleaned;
};

const apiGamesCleaner = (array) => array.map( game=>{
    return oneApiGameCleaner(game)
});

const oneDbGameCleaner = (game) => {
    let dbGameCleaned = {
        id: game.id,
        name: game.name,
        description: game.description,
        image: game.image,
        releasedDate: game.releaseDate,
        rating: game.rating,
        genres: game.Genres.map((genre) => genre.name),
        platforms: game.Platforms.map((platform) => platform.name),
        created: game.created,
    };
    return dbGameCleaned;
};

const dbGamesCleaner = (array) => array.map( game=>{
    return oneDbGameCleaner(game)
})


module.exports = { oneApiGameCleaner, apiGamesCleaner, oneDbGameCleaner, dbGamesCleaner };