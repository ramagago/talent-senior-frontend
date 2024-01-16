import bannerImage from "../../img/ts-img-banner.jpg";

const MainBanner = () => {
  return (
    <div className="relative top-48 flex flex-col xl:flex-row items-center justify-between max-w-7xl py-10">
      <div className="max-w-3xl">
        <h1 className="lg:text-6xl text-4xl font-bold text-azul01 mb-20">
          Promovemos el valor de las relaciones intergeneracionales
        </h1>
        <h3 className="text-3xl  text-azul01">
          Impulsamos la fomración y reinserción del talento senior{" "}
        </h3>
      </div>
      <div>
        <img
          src={bannerImage}
          alt="Talento Senior landing"
          className="max-w-xl"
        />
      </div>
    </div>
  );
};

export default MainBanner;
