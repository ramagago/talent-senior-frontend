import ServiceCard from "./ServiceCard";
import data from "./data";

const Services = () => {
  return (
    <div className="w-screen bg-celeste01 flex flex-col items-center">
      <h1 className="text-white text-4xl sm:text-6xl font-bold mt-24 mb-16">
        Servicios
      </h1>
      <div className="flex flex-wrap justify-center max-w-[1280px] mb-24">
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
