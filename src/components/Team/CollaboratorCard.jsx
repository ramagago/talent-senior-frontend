import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";

const CollaboratorCard = ({ imgSource, label, title, linkedin }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center mx-4">
      <img src={imgSource} alt="" className="w-48 h-48" />
      <h3 className="text-2xl font-bold">{label}</h3>
      <p className="text-gray-600 text-xl mb-4">{title}</p>
      <div className="flex items-center">
        <FaLinkedin className="text-rosado01 text-xl mr-2" />
        <a href={linkedin} className="text-rosado01 text-xl underline">
          Linkedin
        </a>
      </div>
    </div>
  );
};

CollaboratorCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default CollaboratorCard;
