import './App.css'
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import Team from "./components/Team";
import Purpose from "./components/Purpose";
import Ambassadors from "./components/Ambassadors";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen bg-white flex flex-col items-center  ">
      <Navbar />
      <MainBanner />
      <Services />
      <Team />
      <Purpose />
      <Ambassadors className="w-screen xl:w-[1280px]" />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
}

export default App
