import "./styles/app.scss";
import MainPage from "./pages/mainPage";
import BasketPage from "./pages/basketPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
