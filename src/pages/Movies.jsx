import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import SearchBar from "../components/SearchBar";

function Movies() {
  const [showMovies, setShowMovies] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingMovie === null) {
      setMovies([
        ...movies,
        {
          title,
          year,
          rating,
        },
      ]);
    } else {
      setMovies(
        movies.map((movie) => {
          if (movie.title === editingMovie) {
            return { title, year, rating };
          } else return movie;
        }),
      );
      setEditingMovie(null);
    }

    setTitle("");
    setYear("");
    setRating("");
  };

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setRating("");
    setEditingMovie(null);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjgzYzVjNDFlZWYxZDZiMDJmY2FkMDU2OWY2NDUzYiIsIm5iZiI6MTcwMzE4NTU1MC44NDksInN1YiI6IjY1ODQ4YzhlZTBjYTdmNTlmNzAxODkwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcSP5_NEFro7v04nYS9DL2QdFtGuL71kg9pYkuZIbSE",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error fetching movies");
          }
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setMovies([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (editingMovie !== null) {
      const findMovie = movies.find((movie) => movie.title === editingMovie);
      setTitle(findMovie.title);
      setYear(findMovie.release_date.split("-")[0]);
      setRating(findMovie.vote_average);
    }
  }, [editingMovie]);

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
        <button type="submit">
          {editingMovie !== null ? "Update movie" : "Add movie"}
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        <button onClick={() => setShowMovies(!showMovies)}>
          {showMovies ? "Ocultar películas" : "Mostrar películas"}
        </button>
      </div>
      <div className="movie-container">
        {loading ? (
          <p>Cargando películas...</p>
        ) : error !== null ? (
          <p>Ha ocurrido un error: {error.message}</p>
        ) : (
          showMovies && (
            <MoviesList
              movies={movies}
              setFavoriteMovies={setFavoriteMovies}
              favoriteMovies={favoriteMovies}
              setMovies={setMovies}
              editingMovie={editingMovie}
              setEditingMovie={setEditingMovie}
            />
          )
        )}
      </div>

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

export default Movies;
