import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroNiche from "./components/HeroNiche";
import Manwoman from "./components/Man-woman";
import Watch from "./components/Watch";
import Segments from "./components/Segments";
import Foothead from "./components/foot-head";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <HeroSection />
      <HeroNiche/>
      <Manwoman/>
      <Watch/>
      <Segments/>
      <Foothead/>
      <Footer/>
    </div>
  );
}

export default App;