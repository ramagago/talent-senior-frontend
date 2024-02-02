import data from "./data";
import PropTypes from "prop-types";

const Purpose = ({ id }) => {
  return (
    <div
      className="scroll-mt-24 lg:scroll-mt-48 w-screen xl:w-[1280px] flex items-end flex-col"
      id={id}
    >
      <h2 className="text-azul01 text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 mb-2 mr-4">
        {data.title}
      </h2>
      <hr className="inline w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 mr-4" />

      <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
        <img
          src={data.img}
          alt=""
          className="rounded-3xl w-64 mobile:w-96 object-cover m-4"
        />
        <p className="m-4 text-gray-500 text-xl">{data.description}</p>
      </div>
    </div>
  );
};

Purpose.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Purpose;
