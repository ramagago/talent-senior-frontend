import { TestimonialsData } from "./data";
import TestimonialsCard from "./TestimonialsCard";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
const Testimonials = () => {
  return (
    <div className="relative top-48 max-w-7xl flex flex-col">
      <h1 className="text-azul01 text-7xl font-bold mt-16 mb-4">Testimonios</h1>
      <hr className="max-w-48 bg-azul01 h-2 mb-10" />

      <div className="flex justify-center items-center">
        <TfiArrowCircleLeft className="size-56 text-gray-400" />
        {TestimonialsData.map(({ name, title, testimony }) => (
          <TestimonialsCard
            key={name}
            name={name}
            title={title}
            testimony={testimony}
          />
        ))}{" "}
        <TfiArrowCircleRight className="size-56 text-gray-400" />
      </div>
    </div>
  );
};

export default Testimonials;
