const Contact = () => {
  return (
    <div className="relative top-48 h-1/2 flex flex-col">
      <h1 className="text-azul01 text-7xl font-bold mt-16 mb-4">Contacto</h1>
      <hr className="max-w-48 bg-azul01 h-2 mb-10" />
      <div className="w-screen flex text-white">
        <div className="w-1/2 h-full bg-azul01 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold">Soy empresa</h2>
          <h5 className="text-xl my-6">Te ayudamos a encontrar talentos</h5>
          <div className="flex">
            <button className="text-azul01 text-2xl font-bold py-3 px-12 mr-2 bg-white rounded-full">
              Registrarme
            </button>
            <button className="text-azul01 text-2xl font-bold py-3 px-12 ml-2 bg-white rounded-full">
              Agendar Entrevista
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full bg-celeste01 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold">Soy talento</h2>
          <h5 className="text-xl my-6">Estamos aquí para ayudarte a crecer</h5>
          <div className="flex">
            <button className="text-azul01 text-2xl font-bold py-3 px-12 mr-2 bg-white rounded-full">
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
