import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import { useEffect } from "react";


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

  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },
    []
  );

  const [pokemonIndex, setpokemonIndex] = useState("bulbasaur");
  const index = pokemonList.map(pokemon => pokemon.name).indexOf(pokemonIndex);

  return (
    <div>
      <NavBar pokemonList={pokemonList} setpokemonIndex={setpokemonIndex} />
      <PokemonCard pokemon={pokemonList[index]} />
    </div>
  );
}

export default App
