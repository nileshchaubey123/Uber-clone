import HeroSection from "./components/HeroSection";
import HeroNiche from "./components/HeroNiche";
import Manwoman from "./components/Man-woman";
import Watch from "./components/Watch";
import Segments from "./components/Segments";
import Foothead from "./components/foot-head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <HeroNiche/>
      <Manwoman/>
      <Watch/>
      <Segments/>
      <Foothead/>
      <Footer/>
    </>
  );
}

export default App;