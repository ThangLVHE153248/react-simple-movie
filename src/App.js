import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}>
          <Route exact path="/movies" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
