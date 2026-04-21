import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
import Reservas from "../pages/Reservas";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;