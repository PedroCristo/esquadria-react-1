import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection"
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
function MainPage() {
    return(
        <div>
           <HeroSection />
           <AboutSection />
           <BannerSection />
           <ServicesSection />
           <GallerySection />
        </div>
    )
}

export default MainPage;