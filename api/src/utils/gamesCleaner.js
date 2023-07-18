const oneApiGameCleaner = (game) => {
    let GameCleaned = {
        id: game.id,
        name: game.name,
        description: game.description_raw,
        platforms: game.platforms.map(plat=>plat.platform.name),
        image: game.background_image,
        releaseDate: game.released,
        rating: game.rating,
        genres: game.genres.map(genre=>genre.name),
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
        image: game.image,
        description: game.description,
        platforms: game.Platforms.map((platform) => platform.name),
        released: game.released,
        rating: game.rating,
        genres: game.Genres.map((genre) => genre.name),
        created: game.created,
    };
    return dbGameCleaned;
};

const dbGamesCleaner = (array) => array.map( game=>{
    return oneDbGameCleaner(game)
})


module.exports = { oneApiGameCleaner, apiGamesCleaner, oneDbGameCleaner, dbGamesCleaner };