import PropTypes from "prop-types";

const ServicesInfo = ({ selectedService, selectedServiceInfo, onClose }) => {
  return (
    <div className="w-screen  h-screen bg-black/60 z-50 fixed flex flex-col justify-center items-center">
      <div className="flex w-full justify-end items-end lg:max-w-[740px]">
        <button className="m-4 text-3xl text-white" onClick={onClose}>
          X
        </button>
      </div>
      <div className="bg-white rounded-3xl lg:max-w-[740px]  flex flex-col items-center">
        <h3 className="py-6 font-bold text-xl sm:text-2xl m-4">
          {selectedService}
        </h3>
        <p className="text-gray-500 text-lg sm:text-xl mt-4 mb-24 mx-4 sm:mx-20">
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
