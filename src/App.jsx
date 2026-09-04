import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <h1>🎬 Movie App</h1>
      <BrowserRouter>
        {
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        }
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
