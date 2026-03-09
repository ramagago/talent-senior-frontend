import PropTypes from "prop-types";

export default function BurgerIcon({ isOpen, onClick }) {
  const baseClasses =
    "h-0.5 w-6 transition-all duration-[600ms] ease-in-out bg-black";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group mr-4 flex h-12 w-12 flex-col items-center justify-center space-y-1.5 cursor-pointer bg-transparent xl:hidden"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
    >
      <div
        className={`${baseClasses} ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <div
        className={`${baseClasses} ${
          isOpen ? "translate-x-2 opacity-0" : ""
        }`}
      />
      <div
        className={`${baseClasses} ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
}

BurgerIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
