import bannerImage from "../../img/ts-img-banner.jpg";
import PropTypes from "prop-types";

const MainBanner = ({ id }) => {
  return (
    <div
      className="scroll-mt-24 lg:scroll-mt-48 w-screen xl:w-[1280px] mb-10 flex flex-col xl:flex-row items-center justify-between py-10"
      id={id}
    >
      <div className="max-w-3xl">
        <h1 className="text-2xl xsm:text-3xl sm:text-5xl lg:text-6xl mx-4 font-bold text-azul01 mb-6">
          Promovemos el valor de las relaciones intergeneracionales
        </h1>
        <h3 className="text-xl mx-4 text-azul01">
          Impulsamos la formación y reinserción del talento senior
        </h3>
      </div>
      <div>
        <img src={bannerImage} alt="Talento Senior landing" className="p-4" />
      </div>
    </div>
  );
};
MainBanner.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MainBanner;
