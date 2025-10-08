import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import ColorThemeSelector from "./components/ColorThemeSelector";
import AboutMe from "./sections/AboutMe";
// import ColorPalette from "./components/ColorPalette";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    {/* <TechStack /> */}
    {/* <ColorPalette /> */}
    <Testimonials />
    <Contact />
    <Footer />
    <ColorThemeSelector />
  </>
);

export default App;
