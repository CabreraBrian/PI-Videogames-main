import { 
    GET_ALLGAMES, 
    GET_ALLGENRES, 
    GET_ALLPLATFORMS, 
    GET_DETAIL, 
    CLEAR_DETAIL, 
    GET_GAMEBYNAME, 
    ORDER_GAMES, 
    GAME_GENRE, 
    GAME_ORIGIN, 
    GAME_PLATFORM, 
    CLEAR_GAMES
} from "./actions"

let initialState = { 
    allGames:[],
    allGamesCopy:[],
    allGenres:[], 
    allPlatforms:[],
    gameDetail: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLGAMES:
            return{
                ...state,
                allGames: action.payload,
                allGamesCopy: action.payload
            };

        case GET_GAMEBYNAME:
            return{
                ...state,
                allGamesCopy: action.payload
            }

        case GET_ALLGENRES:
            return{
                ...state,
                allGenres:action.payload
            }

        case GET_ALLPLATFORMS:
            return{
                ...state,
                allPlatforms:action.payload
            }

        case GET_DETAIL:
            return{
                ...state,
                gameDetail:action.payload
            }

        case CLEAR_DETAIL:
            return{
                ...state,
                gameDetail: {}
            }

        case CLEAR_GAMES:
            return{
                ...state,
                allGames: [],
                allGamesCopy: [],
            }
            
        case ORDER_GAMES:
            const allGamesForOrder = [...state.allGames]
            let orderGames = action.payload === "predef"
            ? allGamesForOrder 
            : action.payload === "ascendingName" 
            ? allGamesForOrder.sort((a, b) => a.name.localeCompare(b.name)) 
            : allGamesForOrder.sort ((a, b) => b.name.localeCompare(a.name))
            return { ...state, allGamesCopy: orderGames}

        case GAME_GENRE:
            const allGamesForGenre = [...state.allGames];
            let filteredForGenre = action.payload === 'all' 
            ? allGamesForGenre 
            : allGamesForGenre.filter(game => game.genres.includes(action.payload));//&& item.genres.includes(action.payload)
            !filteredForGenre.length && (filteredForGenre = ["No hay juegos con ese genero"]);
            return { ...state, allGamesCopy: filteredForGenre };

        case GAME_PLATFORM:
            const allGamesForPlatform = [...state.allGames]
            let filteredForPlatform = action.payload === 'all'
            ? allGamesForPlatform
            : allGamesForPlatform.filter((game) => game.platforms.includes(action.payload));
            !filteredForPlatform.length && (filteredForPlatform = ['No hay juegos con esa plataforma'])
            return {...state, allGamesCopy: filteredForPlatform}

        case GAME_ORIGIN:
            const allGamesForOrigin = [...state.allGames];
            let FilteredForOrigin = 
            action.payload === 'all' 
            ? allGamesForOrigin
            : action.payload === 'database' 
            ? allGamesForOrigin.filter(item => item.created === true) 
            : allGamesForOrigin.filter(item => item.created === false)
            return { ...state, allGamesCopy: FilteredForOrigin }

        default: 
        return { ...state };

    };
};

export default reducer;