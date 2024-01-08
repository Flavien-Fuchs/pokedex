import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const pokemon = pokemonList[0]

function App() {
  return (
    <div>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
    </div>
  );
}

export default App
