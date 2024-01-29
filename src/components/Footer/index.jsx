import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-screen xl:w-[1280px] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-start items-start my-12 ml-6">
        <div className="flex flex-col mr-6">
          <h4 className="font-bold text-2xl mb-2">Quienes Somos</h4>
          <ul className="text-gray-500 text-lg my-2">
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Nuestro equipo
            </li>
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Embajadores
            </li>
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Propósito
            </li>
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Servicios
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:ml-6">
          <h4 className="font-bold text-2xl mb-4">Ayuda</h4>
          <ul className="text-gray-500 text-lg my-2">
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Preguntas frecuentes
            </li>
            <li className=" hover:text-gray-400 hover:cursor-pointer">
              Contáctanos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3">
          <FaFacebookF />
        </div>
        <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3 mx-6">
          <FaInstagram />
        </div>
        <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3">
          <FiMail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
