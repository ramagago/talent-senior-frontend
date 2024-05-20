import PropTypes from "prop-types";
import { FaLinkedinIn } from "react-icons/fa";
import cn from "classnames";

const AmbassadorCard = ({ img, name, title, linkedin, className }) => {
  return (
    <div
      className={cn(
        className,
        "flex-col text-center justify-center items-center"
      )}
    >
      <img src={img} alt="" className="w-48 h-48 object-cover" />
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="h-20 text-gray-600 text-xl mb-4 w-full text-wrap">
        {title}
      </p>
      <div className="flex items-center">
        <FaLinkedinIn className="text-rosado01 text-3xl mr-2" />
        <a 
        href={linkedin}
        className="text-rosado01 text-3xl underline"
        target="_blank"
        rel="noopener noreferrer">
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
  className: PropTypes.string.isRequired,
};

export default AmbassadorCard;
