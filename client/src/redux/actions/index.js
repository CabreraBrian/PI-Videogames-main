import axios from "axios";

export const GET_ALLGAMES = "GET_ALLGAMES";
// export const GET_ALLGENRES = "GET_ALLGENRES";
// export const GET_ALLPLATFORMS = "GET_ALLPLATFORMS";

export const getAllGames = () => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: GET_ALLGAMES,
            payload: data,
        });
    };
};

// export const GetAllGenres = () => {
//     return async (dispatch) => {
//         const { data } = await axios.get("http://localhost:3001/genres");
//         return dispatch({
//             type: GET_ALLGENRES,
//             payload: data,
//         });
//     };
// };

// export const GetAllPlatforms = () => {
//     return async (dispatch) => {
//         const { data } = await axios.get("http://localhost:3001/platforms");
//         return dispatch({
//             type: GET_ALLPLATFORMS,
//             payload: data,
//         });
//     };
// };