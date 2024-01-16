import ServiceCard from "./ServiceCard";
import data from "./data";

const Services = () => {
  return (
    <div className="relative top-48 w-screen bg-celeste01 flex flex-col items-center">
      <h1 className="text-white text-5xl font-bold mt-24 mb-16">Servicios</h1>
      <div className="flex flex-wrap justify-center max-w-7xl mb-24">
        {data.map(({ img, label, description }) => (
          <ServiceCard
            key={label}
            imgSource={img}
            title={label}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
