import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage";
import PreLoader from "./utilities/preloader/PreLoader";
import Cookies from "./utilities/cookies/Cookies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/mainpage" exact element={<MainPage />} />
      </Routes>
      <PreLoader />
      <Cookies />
    </div>
  );
}

export default App;
