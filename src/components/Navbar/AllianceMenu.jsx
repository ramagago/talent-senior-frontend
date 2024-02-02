import PropTypes from "prop-types";

const AllianceMenu = ({ className }) => {
  return (
    <div className={`${className} bg-white flex flex-col`}>
      <h4>Alianzas plateadas</h4>
      <div className="flex">
        <img src="" alt="" />
        <a href="https://nudaprop.com/">Nuda Drop</a>
      </div>
      <h4>Alianzas Diversas</h4>
      <div className="flex">
        <img src="" alt="" />
        <a href="https://www.fibras.org/">Apoyo Fibra</a>
      </div>
    </div>
  );
};

AllianceMenu.propTypes = {
  className: PropTypes.object.isRequired,
};

export default AllianceMenu;
