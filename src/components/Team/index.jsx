import { cofoundersData, collaboratorsData } from "./data";
import CofounderCard from "./CofounderCard";
import CollaboratorCard from "../CollaboratorCard";
import imgBanner from "../../img/ts-banner-team.png";
import PropTypes from "prop-types";

const Team = ({ id }) => {
  return (
    <div
      id={id}
      className="scroll-mt-24 lg:scroll-mt-48 flex flex-col justify-center items-center"
    >
      <div className=" w-screen xl:w-[1280px] flex flex-col">
        <h2 className="text-azul01 text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 mb-2 ml-4">
          Quienes somos
        </h2>
        <hr className="w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 ml-4" />
        <h3 className="text-celeste01 text-2xl sm:text-4xl font-bold mb-4 ml-4">
          Co-Fundadoras
        </h3>
        <div className="flex flex-wrap  justify-around items-center mx-4">
          {cofoundersData.map(({ img, label, description, linkedin }) => (
            <CofounderCard
              key={label}
              imgSource={img}
              title={label}
              description={description}
              linkedin={linkedin}
            />
          ))}
        </div>
        <h3 className="text-celeste01 text-2xl sm:text-4xl font-bold mb-12 mt-6 ml-4">
          Colaboradores
        </h3>
        <div className="flex flex-wrap justify-center mb-12">
          {collaboratorsData.map(({ img, label, title, linkedin }) => (
            <CollaboratorCard
              className="mx-6 mb-6"
              key={label}
              imgSource={img}
              label={label}
              title={title}
              linkedin={linkedin}
            />
          ))}
        </div>
      </div>
      <div className="">
        <img
          src={imgBanner}
          alt="Dos personas en una oficina saludandose"
          className="  w-screen object-cover "
        />
      </div>
    </div>
  );
};

Team.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Team;


