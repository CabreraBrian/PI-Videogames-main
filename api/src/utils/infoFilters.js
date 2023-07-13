require("dotenv").config();
const { API_KEY } = process.env

const genresFiltered = (genres) =>{
    const finalgenres = [];
    genres.map( genre=>{finalgenres.push(genre.name)})
    return finalgenres;
}

// const platformsFiltered = (platforms) =>{
//     const platformsFinal = [];
//     platforms.map(platf =>{platformsFinal.push(platf.platform.name)})
//     return platformsFinal.join(",");
// }

const api100games = async () => {
    let games100 = [];
    let urlg = `${URL}${API_KEY}`;
    
    while(games100.length < 100) {
        const data = (await axios.get(urlg)).data;
        games100 = games100.concat(data.results)
        urlg = data.next;
    }
    return games100;
}

module.exports = {genresFiltered, api100games}