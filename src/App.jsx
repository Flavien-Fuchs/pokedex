import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const decreaseClick = () => {
    pokemonIndex > 0 ? setpokemonIndex(pokemonIndex - 1) : pokemonIndex
  }
  const increaseClick = () => {
    pokemonIndex < (pokemonList.length - 1) ? setpokemonIndex(pokemonIndex + 1) : pokemonIndex
  }


  return (
    <div>
      <button onClick={decreaseClick}>Précédent</button>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={increaseClick}>Suivant</button>
    </div>
  );
}

export default App
