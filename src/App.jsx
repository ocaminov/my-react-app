import "./App.css";
import MovieCard from "./MovieCard";

const movies = [
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
];

function App() {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </>
  );
}

export default App;
