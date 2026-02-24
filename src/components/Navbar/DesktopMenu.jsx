import PropTypes from "prop-types";
import AllianceMenu from "./AllianceMenu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DesktopMenu = ({ sections, currentSection }) => {
  const [isAllianceOpen, setAllianceOpen] = useState(false);

  const toggleAlliance = () => {
    setAllianceOpen(!isAllianceOpen);
  };
  return (
    <>
      <ul className="xl:flex justify-center items-center hidden relative list-none">
        <a href="#services">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.services ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            SERVICIOS
          </li>
        </a>
        <a href="#team">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.team ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            QUIENES SOMOS
          </li>
        </a>
        <a href="#purpose">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.purpose ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            PROPÓSITO
          </li>
        </a>
        <a href="#ambassadors">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.ambassadors ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            EMBAJADORES
          </li>
        </a>
        <a href="#testimonials">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.testimonials ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            TESTIMONIOS
          </li>
        </a>
        <a href="#contact">
          <li
            className={`px-6 py-4 text-1xl ${
              currentSection === sections.contact ? "font-bold" : ""
            } hover:text-gray-500 active:text-gray-00`}
          >
            CONTACTO
          </li>
        </a>
        <li
          className="flex items-center px-6 py-4 text-1xl cursor-pointer  hover:text-gray-500 active:text-gray-00"
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
          className={`absolute right-0 bottom-0 translate-y-full transition-all duration-200 ease-out ${
            isAllianceOpen
              ? "opacity-100 translate-y-full"
              : "opacity-0 translate-y-3/4 pointer-events-none"
          }`}
        >
          <div
            className={`transition-opacity duration-200 ${
              isAllianceOpen ? "opacity-100 delay-200" : "opacity-0 delay-0"
            }`}
          >
            <AllianceMenu className="" />
          </div>
        </div>
      </ul>
    </>
  );
};

DesktopMenu.propTypes = {
  sections: PropTypes.object.isRequired,
  currentSection: PropTypes.string.isRequired,
};

export default DesktopMenu;
