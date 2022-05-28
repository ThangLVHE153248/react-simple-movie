import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/film/MoviePage";
import SeriesPage from "./pages/film/SeriesPage";
import HomePage from "./pages/HomePage";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeRoute />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviePage />} />
          <Route exact path="/series" element={<SeriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
