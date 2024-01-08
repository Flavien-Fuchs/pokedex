function NavBar({ setpokemonIndex, pokemonIndex, max }) {


    const decreaseClick = () => {
        pokemonIndex > 0 ? setpokemonIndex(pokemonIndex - 1) : pokemonIndex
    }
    const increaseClick = () => {
        pokemonIndex !== (max - 1) ? setpokemonIndex(pokemonIndex + 1) : pokemonIndex
    }

    return (

        <div>
            <button onClick={decreaseClick}>Précédent</button>
            <button onClick={increaseClick}>Suivant</button>
        </div>
    )
}

export default NavBar;