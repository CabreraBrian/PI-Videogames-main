import axios from "axios";

export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_ALLGENRES = "GET_ALLGENRES";
export const GET_ALLPLATFORMS = "GET_ALLPLATFORMS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_GAMEBYNAME = "GET_GAMEBYNAME";
export const GAME_ORIGIN = "GAME_ORIGIN";
export const ORDER_GAMES = "ORDER_GAMES";
export const GAME_GENRE = "GAME_GENRE";
export const GAME_PLATFORM = "GAME_PLATFORM";
export const CLEAR_GAMES = "CLEAR_GAMES"
export const GET_INDIE_PLATAFORMAS = "GET_INDIE_PLATAFORMAS"
export const DELETE_GAME = "DELETE_GAME";


export const getAllGenres = () => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/genres");
        return dispatch({
            type: GET_ALLGENRES,
            payload: data,
        });
    };
};

export const getAllPlatforms = () => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/platforms");
        return dispatch({
            type: GET_ALLPLATFORMS,
            payload: data,
        });
    };
};

export const getAllGames = () => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: GET_ALLGAMES,
            payload: data,
        });
    };
};

export const getDetail = (id) => {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3001/videogames/${id}`)
        return dispatch({ 
            type: GET_DETAIL, 
            payload: data 
        });
    };
};

export const getGameByName = (name) => {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3001/videogames/?name=${name}`)
        return dispatch({ 
            type: GET_GAMEBYNAME, 
            payload: data 
        });
    };
};

export const deleteGame = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3001/videogames/${id}`)
      dispatch({ type: DELETE_GAME, payload: id })
    }
}

export const clearDetail = () => {
    return { 
        type: CLEAR_DETAIL 
    }
};

export const orderGames = (payload) => {
    return {
        type: ORDER_GAMES,
        payload
    }
}

export const filterGamesByOrigin = (payload) => {
    return {
        type: GAME_ORIGIN,
        payload
    }
}

export const filterGamesByGender = (payload) => {
    return {
        type: GAME_GENRE,
        payload
    }
}

export const filterGamsByPlatform = (payload) => {
    return {
        type: GAME_PLATFORM,
        payload
    }
}

export const clearGames = () => {
    return { 
        type: CLEAR_GAMES
    }
};

export const getIndieAndPlatforms = () => {
    return {
        type: GET_INDIE_PLATAFORMAS
    }
}