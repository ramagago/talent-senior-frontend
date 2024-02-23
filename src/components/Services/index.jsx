import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import data from "./data";
import PropTypes from "prop-types";
import { ModalContext } from "../../context/modalContext";

const Services = ({ id }) => {
  const { showModal } = useContext(ModalContext);

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
              onCardClick={() => showModal(label, information)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
Services.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Services;
