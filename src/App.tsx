import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Visit from "./components/Visit/Visit";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Menu />
      <Banner />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;
