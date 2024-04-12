import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection"
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/layout/GoogleMap";
function MainPage() {
    return(
        <div>
           <HeroSection />
           <AboutSection />
           <BannerSection />
           <ServicesSection />
           <GallerySection />
           <ContactSection />
           <GoogleMap />
        </div>
    )
}

export default MainPage;