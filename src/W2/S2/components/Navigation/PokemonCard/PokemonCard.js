import Card from "../Card/Card";

const PokemonCard = ({type, element }) => {
  return (
    <div>
      <h1>Pokemon Card</h1>
      <Card pokemons = {element} type={type}/>
    </div>
  )
}

export default PokemonCard;