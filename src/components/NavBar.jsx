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
    pokemonList: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        map: PropTypes.string,
    }).isRequired,
    setpokemonIndex: PropTypes.string.isRequired,
}

export default NavBar;