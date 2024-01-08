function PokemonCard({ name, imgSrc }) {
    console.log(name, imgSrc)
    return (
        <figure className="card" >
            {imgSrc !== undefined ? (<img src={imgSrc} alt={name} className='card-img' />) : (<p>???</p>)
            }
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default PokemonCard;
