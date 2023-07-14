const genresFiltered = (genres) =>{
    const finalgenres = [];
    genres.map( genre=>{finalgenres.push(genre.name)})
    return finalgenres;
}

const platformsFiltered = (platforms) =>{
    const platformsFinal = [];
    platforms.map(platf =>{platformsFinal.push(platf.platform.name)})
    return platformsFinal;
}

module.exports = {genresFiltered, platformsFiltered}