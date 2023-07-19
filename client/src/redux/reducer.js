import { GET_ALLGAMES, GET_ALLGENRES, GET_ALLPLATFORMS, GET_DETAIL, CLEAR_DETAIL, GET_GAMEBYNAME, ORDER_GAMES, GAME_GENRE, GAME_ORIGIN, GAME_PLATFORM } from "./actions"

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

        default: 
        return { ...state };

        case ORDER_GAMES:
            {let allgame = [...state.allGames]
              let sortedGames
              switch (action.payload) {
                  case 'id':
                  sortedGames = [
                      ...allgame.filter((item) => typeof item.id === 'number').sort((a, b) => a.id - b.id),
                      ...allgame.filter((item) => typeof item.id !== 'number').sort((a, b) => a.id.localeCompare(b.id))
                  ]
                  break
                  case 'ascendingName':
                    sortedGames = allgame.sort((a, b) => a.name.localeCompare(b.name))
                    break
                  case 'descendingName':
                    sortedGames = allgame.sort((a, b) => b.name.localeCompare(a.name))
                    break
                  default:
                    sortedGames = allgame
                }
            return { ...state, allGamesCopy: sortedGames }}

        case GAME_GENRE:
            const allGames = [...state.allGames];
            let filteredGames = action.payload === 'all' ? allGames : allGames.filter(item => item.genres && item.genres.includes(action.payload));
            !filteredGames.length && (filteredGames = ["No hay juegos con ese genero"]);
            return { ...state, allGamesCopy: filteredGames };

         case GAME_PLATFORM:
            const allGamess = [...state.allGames]
            let filteredGamess = action.payload === 'all'? allGamess: allGamess.filter((item) => item.platforms && item.platforms.includes(action.payload))
            !filteredGamess.length && (filteredGamess = ['No hay juegos con esa plataforma'])
            return {...state, allGamesCopy: filteredGamess}

        case GAME_ORIGIN:
            const allggames = [...state.allGames];
            let originFilter = 
            action.payload === 'all' 
            ? allggames 
            : action.payload === 'database' 
            ? allggames.filter(item => item.created === true) 
            : allggames.filter(item => item.created === false)
            return { ...state, allGamesCopy: originFilter }  

    };
};

export default reducer;