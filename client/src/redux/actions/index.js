import axios from "axios";

export const GET_GAMES = "GET_GAMES";

export const getGames = ()=>{
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: GET_GAMES,
            payload: data,
        });
    }

}