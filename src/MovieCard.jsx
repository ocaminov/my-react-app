function MovieCard({title, year, rating}){
    return (
        <>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{rating}</p>
        </>
    );
}

export default MovieCard;