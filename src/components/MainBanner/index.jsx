import bannerImage from "../../img/ts-img-banner.jpg";

const MainBanner = () => {
  return (
    <div className="w-screen xl:w-[1280px] mt-24 mb-10 lg:mt-48 flex flex-col xl:flex-row items-center justify-between py-10">
      <div className="max-w-3xl">
        <h1 className="text-2xl mobile:text-3xl sm:text-5xl lg:text-6xl mx-4 font-bold text-azul01 mb-6">
          Promovemos el valor de las relaciones intergeneracionales
        </h1>
        <h3 className="text-xl mx-4 text-azul01">
          Impulsamos la fomración y reinserción del talento senior
        </h3>
      </div>
      <div>
        <img src={bannerImage} alt="Talento Senior landing" className="p-4" />
      </div>
    </div>
  );
};

export default MainBanner;
