import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/mainpage" exact element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
