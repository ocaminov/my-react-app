import MovieCard from "./MovieCard";

function MoviesList({
  movies,
  setFavoriteMovies,
  favoriteMovies,
  setMovies,
  editingMovie,
  setEditingMovie,
}) {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date.split("-")[0]}
          rating={movie.vote_average}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          setFavoriteMovies={setFavoriteMovies}
          favoriteMovies={favoriteMovies}
          movies={movies}
          setMovies={setMovies}
          editingMovie={editingMovie}
          setEditingMovie={setEditingMovie}
        />
      ))}
    </>
  );
}

export default MoviesList;
