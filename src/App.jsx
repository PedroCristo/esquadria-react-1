import "./main.css";
import "./normalized.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage";
import ThanksPage from "./pages/ThanksPage";
import CookiesPage from "./pages/CookiesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PreLoader from "./utilities/preloader/PreLoader";
import Cookies from "./utilities/cookies/Cookies";
import Layout from "./utilities/layout/Layout";
import ScrollToTop from "./components/extras/ScrollTop";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <ScrollToTop>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/página-principal" element={<Layout showFullMenu={true}><MainPage /></Layout>} />
        <Route path="/página-agradecimiento" element={<ThanksPage />} />
        <Route path="/política-cookies" element={<Layout><CookiesPage /></Layout>} />
        <Route path="/política-privacidade" element={<Layout><PrivacyPolicyPage /></Layout>} />
      </Routes>
      <PreLoader />
      <Cookies />
    </ScrollToTop>
    </div>
  );
}

export default App;
