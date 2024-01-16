import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="relative top-48 w-3/4 flex flex-col">
      <div className="flex justify-start items-start my-12">
        <div className="flex flex-col mr-6">
          <h4 className="font-bold text-2xl mb-2">Quienes Somos</h4>
          <ul className="text-gray-500 text-lg my-2">
            <li>Nuestro equipo</li>
            <li>Embajadores</li>
            <li>Propósito</li>
            <li>Servicios</li>
          </ul>
        </div>
        <div className="flex flex-col ml-6">
          <h4 className="font-bold text-2xl mb-4">Ayuda</h4>
          <ul className="text-gray-500 text-lg my-2">
            <li>Preguntas frecuentes</li>
            <li>Contáctanos</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="text-white text-4xl bg-celeste01 rounded-full p-6">
          <FaFacebookF />
        </div>
        <div className="text-white text-4xl bg-celeste01 rounded-full p-6 mx-12">
          <FaInstagram />
        </div>
        <div className="text-white text-4xl bg-celeste01 rounded-full p-6">
          <FiMail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
