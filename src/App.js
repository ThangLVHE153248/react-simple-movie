import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/film/MoviePage";
import SeriesPage from "./pages/film/SeriesPage";
import FilmDetails from "./pages/filmDetails.js";
import HomePage from "./pages/HomePage";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/movie/:filmId" element={<FilmDetails />} />
          <Route path="/tv/:filmId" element={<FilmDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
