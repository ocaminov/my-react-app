import { useState } from "react";

function MovieCard({
  title,
  year,
  rating,
  setFavoriteMovies,
  favoriteMovies,
  movies,
  setMovies,
  editingMovie,
  setEditingMovie,
}) {
  const findFavoriteMovie = (title) => {
    if (favoriteMovies.includes(title)) {
      return true;
    }
    return false;
  };

  const handleClick = (title) => {
    if (!findFavoriteMovie(title))
      setFavoriteMovies([...favoriteMovies, title]);
    else setFavoriteMovies(favoriteMovies.filter((movie) => movie !== title));
  };

  const handleDelete = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
    if (findFavoriteMovie(title))
      setFavoriteMovies(favoriteMovies.filter((movie) => movie !== title));
  };

  const handleUpdate = (title) => {
    setEditingMovie(title);
  };

  return (
    <>
      <h3>{title}</h3>
      <p>{year}</p>
      <p>⭐{rating}</p>
      <button onClick={() => handleClick(title)}>
        {findFavoriteMovie(title)
          ? "❤️ Remove from favorites"
          : "🤍 Add to favorites"}
      </button>
      <button onClick={() => handleDelete(title)}>🗑️ Delete</button>
      <button onClick={() => handleUpdate(title)}>✏️ Edit</button>
    </>
  );
}

export default MovieCard;
