import { useState } from "react";

function MovieCard({ title, year, rating, setFavoriteMovies, favoriteMovies }) {
  //const [found, setFound] = useState(false);

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
    </>
  );
}

export default MovieCard;
