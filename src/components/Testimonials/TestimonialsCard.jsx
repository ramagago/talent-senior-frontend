import PropTypes from "prop-types";

const TestimonialsCard = ({ name, title, testimony }) => {
  return (
    <div className="mx-12">
      <h3 className="text-celeste01 text-4xl font-bold mb-4">
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
