import PropTypes from "prop-types";
import { FaLinkedinIn } from "react-icons/fa";
import cn from "classnames";

const CollaboratorCard = ({ imgSource, label, title, linkedin, className }) => {
  return (
    <div
      className={cn(
        className,
        " flex flex-col text-center justify-center items-center text-wrap"
      )}
    >
      <img src={imgSource} alt="" className="object-cover mb-2 w-48 h-48 " />
      <h3 className="text-2xl font-bold mb-4">{label}</h3>
      <p className=" text-gray-600 text-xl w-full ">{title}</p>
      <div className="flex items-center">
        <FaLinkedinIn className="text-rosado01 text-xl mr-2" />
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
  className: PropTypes.string.isRequired,
};

export default CollaboratorCard;
