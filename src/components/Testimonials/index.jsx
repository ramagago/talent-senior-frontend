import { TestimonialsData } from "./data";
import TestimonialsCard from "./TestimonialsCard";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

const Testimonials = ({ id }) => {
  const [n, setN] = useState(0);
  const testimonialsRef = useRef(null);

  const clickLeft = () => {
    setN(n === 0 ? TestimonialsData.length - 1 : n - 1);
  };

  const clickRight = () => {
    setN(n === TestimonialsData.length - 1 ? 0 : n + 1);
  };

  // useEffect(() => {
  //   const testimonials = testimonialsRef.current.children;
  //   console.log(testimonials);
  //   for (let i = 0; i < testimonials.length; i++) {
  //     testimonials[i].style.transform = `translateX(${n * -100}%)`;
  //     testimonials[i].style.opacity = i === n ? 1 : 0;
  //     testimonials[i].style.transition = "all 0.5s ease";
  //   }
  // }, [n]);
  // useEffect(() => {
  //   const testimonials = testimonialsRef.current.children;
  //   // for (let i = 0; i < testimonials.length; i++) {
  //   // testimonials[i].style.transform = `translateX(${n * -100}%)`;
  //   // testimonials[i].style.opacity = i === n ? 1 : 0;
  //   // testimonials[i].style.transition = "all 0.5s ease";
  //   // testimonials[i].style.width = "100%";
  //   // }
  // }, [n]);

  return (
    <div
      className="scroll-mt-24 lg:scroll-mt-48 w-screen xl:w-[1280px] flex flex-col"
      id={id}
    >
      <h2 className="text-azul01 text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 mb-2 ml-4">
        Testimonios
      </h2>
      <hr className="w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 ml-4" />

      <div className="flex justify-between items-center md:min-h-[300px]">
        <Carousel>
          {TestimonialsData.map((testimonial) => (
            <TestimonialsCard
              key={testimonial.name}
              name={testimonial.name}
              title={testimonial.title}
              testimony={testimonial.testimony}
            />
          ))}
        </Carousel>

        {/* <button onClick={clickLeft} className="size-8 mx-4 text-gray-400">
          &#10094;
        </button>
        <div ref={testimonialsRef} className="flex w-full">

          <TestimonialsCard
            key={TestimonialsData[n].name}
            name={TestimonialsData[n].name}
            title={TestimonialsData[n].title}
            testimony={TestimonialsData[n].testimony}
          />
        </div>
        <button onClick={clickRight} className="size-8 mx-4 text-gray-400">
          &#10095;
        </button> */}
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Testimonials;

