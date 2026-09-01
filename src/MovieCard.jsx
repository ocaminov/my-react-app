function MovieCard({ title, year, rating, setFavoriteMovies, favoriteMovies }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{year}</p>
      <p>⭐{rating}</p>
      <button onClick={() => setFavoriteMovies(favoriteMovies + 1)}>
        ❤️ Add to favorites
      </button>
    </>
  );
}

export default MovieCard;
