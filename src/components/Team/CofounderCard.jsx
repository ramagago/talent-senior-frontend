import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";

const CofounderCard = ({ imgSource, title, description, linkedin }) => {
  return (
    <div className="flex flex-col justify-center items-center w-96 mx-4 text-center mb-16">
      <img src={imgSource} alt="" className="h-xl w-96" />
      <h2 className="text-3xl sm:text-5xl font-bold my-6">{title}</h2>
      <p className="mb-6 text-sm">{description}</p>
      <div className="flex items-center">
        <FaLinkedin className="text-rosado01 text-xl sm:text-3xl mr-2" />
        <a
          href={linkedin}
          className="text-rosado01 text-xl sm:text-3xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

CofounderCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default CofounderCard;
