import PropTypes from "prop-types";
import AllianceMenu from "./AllianceMenu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileMenu = ({ sections, currentSection, isMenuOpen }) => {
  const [isAllianceOpen, setAllianceOpen] = useState(false);
  const toggleAlliance = () => {
    setAllianceOpen(!isAllianceOpen);
  };
  return (
    <ul
      className={`fixed top-24 right-0 flex flex-col justify-center text-sm bg-white items-center xl:hidden w-48 transition-all duration-200 ease-out ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >
      <a href="#services">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.services ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          SERVICIOS
        </li>
      </a>
      <a href="#team">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.team ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          QUIENES SOMOS
        </li>
      </a>
      <a href="#purpose">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.purpose ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          PROPÓSITO
        </li>
      </a>
      <a href="#testimonials">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.testimonials ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          TESTIMONIOS
        </li>
      </a>
      <a href="#contact">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.contact ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          CONTACTO
        </li>
      </a>
      <a href="#ambassadors">
        <li
          className={`px-7 py-4 ${
            currentSection === sections.ambassadors ? "font-bold" : ""
          } hover:text-gray-500 active:text-gray-00`}
        >
          EMBAJADORES
        </li>
      </a>
      <li
        className="flex items-center px-7 py-4 cursor-pointer  hover:text-gray-500 active:text-gray-00"
        onClick={toggleAlliance}
      >
        ALIANZAS{" "}
        <IoIosArrowDown
          className={`mx-1 transition-transform duration-200 ease-out ${
            isAllianceOpen ? "rotate-180" : ""
          }`}
        />
      </li>
      <div
        className={`absolute right-0 bottom-1 translate-y-full transition-all duration-200 ease-out ${
          isAllianceOpen
            ? "opacity-100 translate-y-full"
            : "opacity-0 translate-y-3/4 pointer-events-none"
        }`}
      >
        <div
          className={`transition-opacity duration-200 ${
            isAllianceOpen ? "opacity-100" : "opacity-0 delay-0"
          }`}
        >
          <AllianceMenu className="" />
        </div>
      </div>
    </ul>
  );
};

MobileMenu.propTypes = {
  sections: PropTypes.object.isRequired,
  currentSection: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
