import "./main.css";
import "./normalized.css";
import "./responsive.css";
import "./animations.css"
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import ThanksPage from "./pages/ThanksPage";
import CookiesPage from "./pages/CookiesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Page404 from "./pages/error/404";
import PreLoader from "./components/extras/preloader/PreLoader";
import Cookies from "./components/extras/cookies/Cookies";
import Layout from "./components/extras/Layout";
import ScrollToTop from "./components/extras/ScrollTop";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
    <PreLoader />
    <ScrollToTop>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/página-principal" element={<Layout showFullMenu={true}><MainPage /></Layout>} />
        <Route path="/página-agradecimento" element={<ThanksPage />} />
        <Route path="/política-cookies" element={<Layout><CookiesPage /></Layout>} />
        <Route path="/política-privacidade" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Cookies />
    </ScrollToTop>
    </div>
  );
}

export default App;
