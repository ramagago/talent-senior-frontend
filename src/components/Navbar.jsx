import logoImage from "../img/ts-logo-navbar.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

// hice un cambio en el Nav

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 bg-white flex justify-center z-50">
      <div className="w-full flex justify-between items-center h-24 ml-4 lg:h-48 lg:w-[1280px]">
        <img
          src={logoImage}
          alt="logo Talento Senior"
          className="size-16 sm:size-20 lg:size-40"
        />
        <div>
          <button onClick={toggleMenu} className="mr-4 lg:hidden">
            <CiMenuBurger className="size-12" />
          </button>
          {isMenuOpen && (
            <ul className="fixed top-24 right-0 flex flex-col justify-center bg-white items-center lg:hidden">
              <li className="px-7 py-4 text-1xl">INICIO</li>
              <li className="px-7 py-4 text-1xl">SERVICIOS</li>
              <li className="px-7 py-4 text-1xl">EMPRESAS</li>
              <li className="px-7 py-4 text-1xl">TALENTO</li>
              <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
              <li className="px-7 py-4 text-1xl">ALIANZAS</li>
            </ul>
          )}
          <ul className="lg:flex justify-center items-center hidden">
            <li className="px-7 py-4 text-1xl">INICIO</li>
            <li className="px-7 py-4 text-1xl">SERVICIOS</li>
            <li className="px-7 py-4 text-1xl">EMPRESAS</li>
            <li className="px-7 py-4 text-1xl">TALENTO</li>
            <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
            <li className="px-7 py-4 text-1xl">ALIANZAS</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
