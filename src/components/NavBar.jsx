import PropTypes from "prop-types";

function NavBar({ pokemonList, setpokemonIndex }) {

    /* const decreaseClick = () => {
        pokemonIndex > 0 ? setpokemonIndex(pokemonIndex - 1) : pokemonIndex
    }
    const increaseClick = () => {
        pokemonIndex !== (max - 1) ? setpokemonIndex(pokemonIndex + 1) : pokemonIndex
    } */
    const selectPkmnClick = (pokemon) => {
        setpokemonIndex(pokemon)
        pokemon === "pikachu" ? alert("pika pikachu !!!") : ""
    }

    return (
        <div>
            {pokemonList.map((pokemon) => (
                <button key={pokemon.name} onClick={() => selectPkmnClick(pokemon.name)}>{pokemon.name}</button>
            ))
            }
        </div >
    )
}

NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    setpokemonIndex: PropTypes.func.isRequired,
}

export default NavBar;