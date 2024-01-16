import { cofoundersData, collaboratorsData } from "./data";
import CofounderCard from "./CofounderCard";
import CollaboratorCard from "./CollaboratorCard";

const Team = () => {
  return (
    <div className="relative top-48 max-w-7xl flex flex-col">
      <h2 className="text-azul01 text-7xl font-bold mt-16 mb-4">
        Quienes somos
      </h2>
      <hr className="max-w-48 bg-azul01 h-2 mb-10" />
      <h3 className="text-celeste01 text-4xl font-bold mb-4">Co-Fundadoras</h3>
      <div className="flex justify-center items-center">
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
      <h3 className="text-celeste01 text-4xl font-bold mb-4 mt-12">
        Colaboradores
      </h3>
      <div className="flex justify-center mb-12">
        {collaboratorsData.map(({ img, label, title, linkedin }) => (
          <CollaboratorCard
            key={label}
            imgSource={img}
            label={label}
            title={title}
            linkedin={linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
