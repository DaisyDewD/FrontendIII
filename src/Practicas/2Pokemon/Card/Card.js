import "./Card.css";

const Card = ({pokemons, type})=>{

    const objBg ={
        fire: "#f44336",
        water: "#0288d1",
        rock: "#4b5a63",
        electric: "#fbc02d"
    }
    
    return (
        <div>
            <h2>Card Pokemon</h2>
            <div className="pokemon_card_container">
                {
                    pokemons.map(pokemon =>
                        <section key={pokemon.id} className="card" style={{ backgroundColor: objBg[type]}}>
                            <p>{pokemon.pokemonName}</p>
                            <img src={pokemon.avatar} alt={pokemon.pokemonName}/>
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default Card;