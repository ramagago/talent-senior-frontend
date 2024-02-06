import ServiceCard from "./ServiceCard";
import ServicesInfo from "./ServicesInfo";
import data from "./data";
import { useState } from "react";
import PropTypes from "prop-types";

const Services = ({ id }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceInfo, setSelectedServiceInfo] = useState(null);

  const handleCardClick = (label, information) => {
    setModalOpen(true);
    setSelectedService(label);
    setSelectedServiceInfo(information);
  };

  return (
    <>
      <div
        id={id}
        className="scroll-mt-24 lg:scroll-mt-48  w-screen bg-celeste01 flex flex-col items-center"
      >
        <h1 className="text-white text-4xl sm:text-6xl font-bold mt-24 mb-16">
          Servicios
        </h1>
        <div className="flex flex-wrap justify-center max-w-[1280px] mb-24">
          {data.map(({ img, label, description, information }) => (
            <ServiceCard
              key={label}
              imgSource={img}
              title={label}
              description={description}
              onCardClick={() => handleCardClick(label, information)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ServicesInfo
          selectedService={selectedService}
          selectedServiceInfo={selectedServiceInfo}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};
Services.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Services;
