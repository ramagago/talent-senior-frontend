import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";

const PRIVACY_POLICY_PARAGRAPHS = [
  "Este documento explica qué información personal podemos recopilar sobre vos,  como candidato o como empresa en relación con nuestro compromiso de servicios y cómo esta información personal puede ser utilizada y compartida. ",
  "Esta Política de Privacidad también establece tus derechos en relación con tu información personal y te indica con quién podes ponerte en contacto si tenes preguntas. ",
  "Recopilamos tus datos personales de varias maneras, como por ejemplo a través de nuestra página web, en eventos online/presenciales, por teléfono o correo electrónico proporcionada directamente por vos a través de las solicitudes de empleo, etc. Podemos recoger los siguientes tipos de datos personales según lo permitido por la legislación, información de contacto como nombre, dirección de correo electrónico y número de teléfono y el currículum vitae con información personal. ",
  "La información mencionada anteriormente la utilizamos para realizar principalmente envío de material promocional, alertas sobre las vacantes disponibles y otras comunicaciones; comunicar y administrar la participación en eventos especiales, promociones, programas, encuestas y estudios de mercado. ",
  "Además de las actividades comerciales mencionadas anteriormente, en caso de ser un postulante y completar el formulario en nuestra web, según lo permitido por la legislación, usamos la información que se describe en esta Política de Privacidad para: proporcionarte oportunidades de empleo y compartir tu información con las empresas solicitantes; proporcionar servicios de formación, orientación profesional y de transición de carrera; evaluar tu idoneidad como candidato y tus calificaciones en relación a una posición vacante.",
  "En caso de datos de contacto sobre empresas, utilizaremos dicha información para ofrecerte servicios de recursos humanos acorde a tus necesidades.",
  "Si tenes alguna consulta o comentario sobre la Política de Privacidad o queres actualizar la información que tenemos sobre vos, por favor contactar a info@talentosenior.uy",
];

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
            <li
              className=" hover:text-gray-400 hover:cursor-pointer"
              onClick={() => setIsPrivacyModalOpen(true)}
            >
              Política de privacidad
            </li>
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
          href="https://www.linkedin.com/company/talento-senior1-uy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3 mr-6">
            <FaLinkedin />
          </div>
        </a>
        <a
          href="mailto:info@talentosenior.uy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white text-2xl md:text-3xl md:p-5 hover:bg-azul01 hover:cursor-pointer transition ease-in-out duration-200 bg-celeste01 rounded-full p-3 ">
            <FiMail />
          </div>
        </a>
      </div>
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex flex-col justify-center items-center px-4 sm:px-10">
          <div className="relative bg-white rounded-3xl w-full max-w-4xl flex flex-col max-h-[80vh]">
            <button
              className="absolute top-10 right-10 text-3xl hover:text-gray-300 bg-transparent"
              onClick={() => setIsPrivacyModalOpen(false)}
            >
              <RxCross1 />
            </button>
            <h3 className="mb-6 mt-20 font-bold text-xl sm:text-2xl mx-10 sm:mx-20">
              Política de privacidad
            </h3>
            <div className="text-gray-500 text-lg sm:text-xl mt-4 mb-10 mx-10 sm:mx-20 overflow-y-auto pr-2">
              {PRIVACY_POLICY_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
