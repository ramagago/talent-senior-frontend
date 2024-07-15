import PropTypes from "prop-types";
import nudaDrop from "../../img/ts-nudadrop.png";
import apoyoFibra from "../../img/ts-apoyofibra.png";
import quintoImpacto from "../../img/ts-quinto-impacto.png";
import pyxisLogo from "../../img/ts-pyxis-tech.png";
const AllianceMenu = ({ className }) => {
  return (
    <div
      className={`${className} bg-white flex flex-col items-end p-7 w-48 xl:w-64 shadow-md`}
    >
      <h4 className="font-black text-sm xl:text-lg mb-2">Alianzas plateadas</h4>
      <div className="flex justify-end">
        <img src={nudaDrop} alt="Nuda Drop Logo" className="w-8 h-8 " />
        <a
          href="https://nudaprop.com/"
          className="text-gray-500 texl-sm xl:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuda Drop
        </a>
      </div>
      <h4 className="font-black text-sm xl:text-lg my-2">Alianzas Diversas</h4>
      <div className="flex justify-end">
        <img src={apoyoFibra} alt="apoyoFibra logo" className="w-8 h-8 " />
        <a
          href="https://www.fibras.org/"
          className="text-gray-500 texl-sm xl:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apoyo Fibra
        </a>
      </div>
      <div className="flex justify-end items-center">
        <img
          src={quintoImpacto}
          alt="quinto impacto logo"
          className="w-5 h-5 mr-2"
        />
        <a
          href="https://quintoimpacto.net/"
          className="text-gray-500 texl-sm xl:text-lg mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quinto Impacto
        </a>
      </div>
      <div className="flex justify-end items-center mt-2">
        <img src={pyxisLogo} alt="pyxis logo" className="w-5 h-5 mr-2" />
        <a
          href="https://pyxis.tech/"
          className="text-gray-500 texl-sm xl:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pyxis
        </a>
      </div>
    </div>
  );
};

AllianceMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AllianceMenu;
