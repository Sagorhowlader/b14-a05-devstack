import "./App.css";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Technology />
      <Footer />
    </>
  );
}

export default App;
