import logoImage from "../img/ts-logo-navbar.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ sections }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Ajusta el offset según necesidad
      // Suponiendo que tienes IDs en tus secciones que coinciden con los nombres

      let current = "";
      Object.keys(sections).forEach((sectionKey) => {
        const sectionId = sections[sectionKey];
        const sectionEl = document.getElementById(sectionId);

        if (
          sectionEl &&
          scrollPosition >= sectionEl.offsetTop &&
          scrollPosition <= sectionEl.offsetTop + sectionEl.offsetHeight
        ) {
          current = sectionKey;
        }
      });
      setCurrentSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 bg-white flex justify-center z-50">
      <div className="w-full flex justify-between items-center h-24 ml-4 xl:h-48 lg:w-[1280px]">
        <img
          src={logoImage}
          alt="logo Talento Senior"
          className="size-16 sm:size-20 xl:size-40"
        />

        <div>
          <button onClick={toggleMenu} className="mr-4 xl:hidden">
            <CiMenuBurger className="size-12" />
          </button>
          {isMenuOpen && (
            <ul className="fixed top-24 right-0 flex flex-col justify-center bg-white items-center xl:hidden">
              <li className="px-7 py-4 text-1xl">SERVICIOS</li>
              <li className="px-7 py-4 text-1xl">QUIENES SOMOS</li>
              <li className="px-7 py-4 text-1xl">PROPÓSITO</li>
              <li className="px-7 py-4 text-1xl">TESTIMONIOS</li>
              <li className="px-7 py-4 text-1xl">CONTACTO</li>
              <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
              <li className="px-7 py-4 text-1xl">ALIANZAS</li>
            </ul>
          )}
          <ul className="xl:flex justify-center items-center hidden">
            <a href="#services">
              <li
                className={`px-7 py-4 text-1xl ${
                  currentSection === "SERVICIOS" ? "font-bold" : ""
                }`}
              >
                SERVICIOS
              </li>
            </a>
            <li className="px-7 py-4 text-1xl">QUIENES SOMOS</li>
            <li className="px-7 py-4 text-1xl">PROPÓSITO</li>
            <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
            <li className="px-7 py-4 text-1xl">TESTIMONIOS</li>{" "}
            <li className="px-7 py-4 text-1xl">CONTACTO</li>
            <li className="px-7 py-4 text-1xl">ALIANZAS</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sections: PropTypes.object.isRequired,
};

export default Navbar;
