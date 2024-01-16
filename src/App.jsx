import './App.css'
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import Team from "./components/Team";
import imgBanner from "./img/ts-banner-team.png";
import Purpose from "./components/Purpose";
import Ambassadors from "./components/Ambassadors";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <MainBanner />
      <Services />
      <Team />
      <div className="relative top-48">
        <img
          src={imgBanner}
          alt="Dos personas en una oficina saludandose"
          className="h-96 w-screen object-cover relative "
        />
      </div>
      <Purpose />
      <Ambassadors />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
