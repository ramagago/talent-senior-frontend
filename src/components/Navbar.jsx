import logoImage from "../img/ts-logo-navbar.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed flex justify-center top-0 w-screen bg-white h-48 z-50">
      <nav className=" flex justify-between items-center w-3/4 h-48 bg-white py-8 ">
        <img src={logoImage} alt="logo Talento Senior" className="max-h-36" />
        <div>
          <button onClick={toggleMenu} className="lg:hidden">
            <CiMenuBurger className="size-12" />
          </button>
          {isMenuOpen && (
            <ul className="fixed top-48 flex justify-center bg-white items-center lg:hidden">
              <li className="px-7 py-4 text-1xl">INICIO</li>
              <li className="px-7 py-4 text-1xl">SERVICIOS</li>
              <li className="px-7 py-4 text-1xl">EMPRESAS</li>
              <li className="px-7 py-4 text-1xl">TALENTO</li>
              <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
              <li className="px-7 py-4 text-1xl">ALIANZAS</li>
            </ul>
          )}
          <ul className="flex justify-center items-center max-lg:hidden">
            <li className="px-7 py-4 text-1xl">INICIO</li>
            <li className="px-7 py-4 text-1xl">SERVICIOS</li>
            <li className="px-7 py-4 text-1xl">EMPRESAS</li>
            <li className="px-7 py-4 text-1xl">TALENTO</li>
            <li className="px-7 py-4 text-1xl">EMBAJADORES</li>
            <li className="px-7 py-4 text-1xl">ALIANZAS</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
