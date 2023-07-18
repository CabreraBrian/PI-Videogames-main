import { GET_ALLGAMES, GET_ALLGENRES, GET_ALLPLATFORMS } from "../actions/index.js"

let initialState = { 
    allGames:[], 
    // allGenres:[], 
    // allPlatforms:[]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLGAMES:
            return{
                ...state,
                allGames: action.payload
            };

        // case GET_ALLGENRES:
        //     return{
        //         ...state,
        //         allGenres:action.payload
        //     }

        // case GET_ALLPLATFORMS:
        //     return{
        //         ...state,
        //         allPlatforms:action.payload
        //     }
        default: 
        return { ...state };
    };
};

export default reducer;