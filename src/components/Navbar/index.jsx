import logoImage from "../../img/ts-logo-navbar.jpg";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = ({ sections }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const divRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + divRef.current.offsetHeight + 2;

      let current = "";
      Object.values(sections).forEach((sectionValue) => {
        const sectionEl = document.getElementById(sectionValue);

        if (
          sectionEl &&
          scrollPosition >= sectionEl.offsetTop &&
          scrollPosition <= sectionEl.offsetTop + sectionEl.offsetHeight
        ) {
          current = sectionValue;
        }
      });
      setCurrentSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <nav
      ref={divRef}
      className="w-full fixed top-0 bg-white flex justify-center z-50"
    >
      <div className="w-full flex justify-between items-center h-24 ml-4 xl:h-48 lg:w-[1280px]">
        <a href="#mainBanner">
          <img
            src={logoImage}
            alt="logo Talento Senior"
            className="size-32 xl:size-40"
          />
        </a>
        <div>
          <button
            onClick={toggleMenu}
            className="mr-4 xl:hidden bg-transparent"
          >
            <CiMenuBurger className="size-12" />
          </button>
          {isMenuOpen && (
            <MobileMenu sections={sections} currentSection={currentSection} />
          )}
          <DesktopMenu sections={sections} currentSection={currentSection} />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sections: PropTypes.object.isRequired,
};

export default Navbar;
