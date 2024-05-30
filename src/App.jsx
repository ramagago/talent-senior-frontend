import "./App.css";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import Team from "./components/Team";
import Purpose from "./components/Purpose";
import Ambassadors from "./components/Ambassadors";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesInfo from "./components/Services/ServicesInfo";
import { ModalContext, useModalContextManager } from "./context/ModalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsAndConditions from "./components/CompanyForm/termsAndConditions";
import Faq from "./components/Faq/Faq";

function App() {
  const modalManager = useModalContextManager();

  return (
    <ModalContext.Provider value={modalManager}>
      {modalManager.isVisible && (
        <ServicesInfo
          selectedService={modalManager.title}
          selectedServiceInfo={modalManager.info}
          onClose={() => modalManager.setIsVisible(false)}
        />
      )}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="w-screen bg-white flex flex-col items-center relative ">
                  <Navbar sections={sections} />
                  <div className=" mt-24 lg:mt-48 flex flex-col items-center">
                    <MainBanner id={sections.mainBanner} />
                    <Services id={sections.services} />
                    <Team id={sections.team} />
                    <Purpose id={sections.purpose} />
                    <Ambassadors id={sections.ambassadors} />
                    <Testimonials id={sections.testimonials} />
                    <Contact id={sections.contact} />
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/terminos" element={<TermsAndConditions />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </ModalContext.Provider>
  );
}

export default App;

const sections = {
  mainBanner: "mainBanner",
  services: "services",
  team: "team",
  purpose: "purpose",
  ambassadors: "ambassadors",
  testimonials: "testimonials",
  contact: "contact",
};
