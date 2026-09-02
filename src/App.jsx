import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

/*const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
  },
  {
    title: "Avatar",
    year: 2009,
    rating: 7.8,
  },
];*/

function App() {
  const [showMovies, setShowMovies] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMovies([
      ...movies,
      {
        title,
        year,
        rating,
      },
    ]);

    setTitle("");
    setYear("");
    setRating("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          name="year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Add movie</button>
      </form>
      <button onClick={() => setShowMovies(!showMovies)}>
        {showMovies ? "Ocultar películas" : "Mostrar películas"}
      </button>

      {showMovies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            setFavoriteMovies={setFavoriteMovies}
            favoriteMovies={favoriteMovies}
            movies={movies}
            setMovies={setMovies}
          />
        ))}

      <p>Favorite movies: {favoriteMovies.length}</p>
      {favoriteMovies.length > 0 ? (
        <ul>
          {favoriteMovies.map((movie, i) => (
            <li key={i}>{movie}</li>
          ))}
        </ul>
      ) : (
        <p>You don't have any favorite movies yet.</p>
      )}
    </>
  );
}

export default App;
