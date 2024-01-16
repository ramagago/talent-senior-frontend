import AmbassadorCard from "./AmbassadorCard";
import { AmbassadorsData } from "./data";

const Ambassadors = () => {
  return (
    <div className="relative top-48 max-w-7xl flex flex-col">
      <h1 className="text-azul01 text-7xl font-bold mt-16 mb-4">Embajadores</h1>
      <hr className="max-w-48 bg-azul01 h-2 mb-10" />
      <div className="flex justify-center items-center ">
        <button>back</button>
        {AmbassadorsData.map(({ img, name, title, linkedin }) => (
          <AmbassadorCard
            key={name}
            img={img}
            name={name}
            title={title}
            linkedin={linkedin}
          />
        ))}

        <button>next</button>
      </div>
    </div>
  );
};

export default Ambassadors;
