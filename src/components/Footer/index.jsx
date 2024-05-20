import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen xl:w-[1280px] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-start items-start my-12 ml-6">
        <div className="flex flex-col mr-6">
          <ul className="text-gray-500 text-lg my-2">
            <a href="#services">
              <li className=" hover:text-gray-400 hover:cursor-pointer">
                Servicios
              </li>
            </a>
            <a href="#team">
              <li className=" hover:text-gray-400 hover:cursor-pointer">
                Quienes somos
              </li>
            </a>
            <a href="#purpose">
              <li className=" hover:text-gray-400 hover:cursor-pointer">
                Propósito
              </li>
            </a>
            <a href="#ambassadors">
              <li className=" hover:text-gray-400 hover:cursor-pointer">
                Embajadores
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col sm:ml-6">
          <ul className="text-gray-500 text-lg my-2">
            {/* <li className=" hover:text-gray-400 hover:cursor-pointer">
            <Link to="/terminos" target="_blank"> Preguntas frecuentes </Link>
            </li> */}
            <a href="#contact">
              <li className=" hover:text-gray-400 hover:cursor-pointer">
                Contáctanos
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <a
          href="https://www.facebook.com/people/Talento-Senior-Uy/100086569131538/?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3">
            <FaFacebookF />
          </div>
        </a>
        <a
          href="https://www.instagram.com/talentosenioruy/?igshid=NGVhN2U2NjQ0Yg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3 mx-6">
            <FaInstagram />
          </div>
        </a>
        <a
          href="info@talentosenior.uy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3">
            <FiMail />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
