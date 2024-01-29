import PropTypes from "prop-types";

const TestimonialsCard = ({ name, title, testimony }) => {
  return (
    <div className="w-full">
      <h3 className="text-celeste01 text-2xl sm:text-4xl mb-4 font-bold">
        {name} / {title}
      </h3>
      <p className="text-gray-500 text-lg mb-4">{testimony}</p>
    </div>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
};

export default TestimonialsCard;
