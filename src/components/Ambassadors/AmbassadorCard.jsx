import PropTypes from "prop-types";
import { FaLinkedinIn } from "react-icons/fa";

const AmbassadorCard = ({ img, name, title, linkedin }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center mx-4">
      <img src={img} alt="" className="w-48 h-48 object-cover" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-gray-600 text-xl mb-4">{title}</p>
      <div className="flex items-center">
        <FaLinkedinIn className="text-rosado01 text-3xl mr-2" />
        <a href={linkedin} className="text-rosado01 text-3xl underline">
          Linkedin
        </a>
      </div>
    </div>
  );
};

AmbassadorCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default AmbassadorCard;
