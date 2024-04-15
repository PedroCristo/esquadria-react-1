import "./main.css";
import "./normalized.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage";
import ThanksPage from "./pages/ThanksPage";
import PreLoader from "./utilities/preloader/PreLoader";
import Cookies from "./utilities/cookies/Cookies";
import Layout from "./utilities/layout/Layout";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/página-principal" element={<Layout><MainPage /></Layout>} />
        <Route path="/página-agradecimiento" element={<ThanksPage />} />
      </Routes>
      <PreLoader />
      <Cookies />
    </div>
  );
}

export default App;
