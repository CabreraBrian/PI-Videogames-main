import style from "./Cards.module.css"
import Card from "../Card/Card.jsx"
import Loading from "../Loading/Loading";

const Cards = ({allGames}) => {


    const gamesList = allGames
    return (
        <div className= {style.contenedor}>
            {
                gamesList.length 
                ? gamesList.map((game) => {
                    return (
                        <Card
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        description={game.description} 
                        image={game.image} 
                        releaseDate={game.releaseDate} 
                        rating={game.rating} 
                        genres={game.genres} 
                        platforms={game.platforms} 
                        created={game.created}
                        />
                    )
                }):<Loading/>
            }
        </div>
    );
};

export default Cards