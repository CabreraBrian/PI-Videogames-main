import { GET_GAMES } from "../actions/index.js"

let initialState = {
    allGames:[],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES:
            return{
                ...state,
                allGames:action.payload
            }
        default: 
        return { ...state };
    }
}

export default reducer;