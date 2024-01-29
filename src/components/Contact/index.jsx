const Contact = () => {
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="w-full xl:w-[1280px] flex flex-col items-end">
        <h2 className="text-azul01 text-3xl sm:text-5xl lg:text-6xl font-bold mt-10 mb-2 mr-4">
          Contacto
        </h2>
        <hr className="w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 mr-4 " />
      </div>
      <div className="w-screen flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 bg-azul01 h-[500px] flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl mobile:text-4xl font-bold text-white">
            Soy empresa
          </h3>
          <h5 className="text-lg mobile:text-xl m-6 text-white">
            Te ayudamos a encontrar talentos
          </h5>
          <div className="flex flex-col">
            <button className="text-azul01 text-md font-bold m-2 py-3 px-10 bg-white rounded-full hover:bg-celeste01 hover:text-white transition-all ease-in-out duration-200">
              Registrarme
            </button>
            <button className="text-azul01 text-md font-bold m-2 py-3 px-10 bg-white rounded-full hover:bg-celeste01 hover:text-white transition-all ease-in-out duration-200">
              Agendar Entrevista
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-celeste01 h-[500px] flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl mobile:text-4xl font-bold text-white">
            Soy talento
          </h3>
          <h5 className="text-lg mobile:text-xl my-6 text-white">
            Estamos aquí para ayudarte a crecer
          </h5>
          <div className="flex">
            <button className="text-azul01 text-md font-bold m-2 py-3 px-10 bg-white rounded-full hover:bg-azul01 hover:text-white transition-all ease-in-out duration-200">
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
