import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Brands from "./components/Brands";
import { Features, Services, Footer } from "./components/Sections";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="font-sans text-charcoal bg-white min-h-screen selection:bg-primary-light/30">
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <Features />
      <Services />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
