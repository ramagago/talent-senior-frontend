import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";

const ServicesInfo = ({ selectedService, selectedServiceInfo, onClose }) => {
  console.log("RENDERING MODAL");
  return (
    <div className="w-screen h-screen bg-black/60 z-50 fixed flex flex-col justify-center items-center px-10">
      <div className="relative bg-white rounded-3xl w-full max-w-4xl flex flex-col ">
        <button
          className="absolute top-10 right-10 text-3xl hover:text-gray-300"
          onClick={onClose}
        >
          <RxCross1 />
        </button>
        <h3 className="mb-6 mt-20 font-bold text-xl sm:text-2xl mx-10 sm:mx-20">
          {selectedService}
        </h3>
        <p className="text-gray-500 text-lg sm:text-xl mt-4 mb-24 mx-10 sm:mx-20">
          {selectedServiceInfo}
        </p>
      </div>
    </div>
  );
};

ServicesInfo.propTypes = {
  selectedService: PropTypes.string.isRequired,
  selectedServiceInfo: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ServicesInfo;
