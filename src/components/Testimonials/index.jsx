import { TestimonialsData } from "./data";
import TestimonialsCard from "./TestimonialsCard";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const Testimonials = ({ id }) => {
  const carRef = useRef();
  // const params = {
  //   wrapAround: true,
  // };

  // const [n, setN] = useState(0);
  // const testimonialsRef = useRef(null);

  // const clickLeft = () => {
  //   setN(n === 0 ? TestimonialsData.length - 1 : n - 1);
  // };

  // const clickRight = () => {
  //   setN(n === TestimonialsData.length - 1 ? 0 : n + 1);
  // };

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
  //
  return (
    <div
      className="scroll-mt-24 lg:scroll-mt-48 w-screen flex flex-col items-center"
      id={id}
    >
      <div className="w-full xl:w-[1280px]">
        <h2 className="text-azul01  text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 mb-2 ml-4">
          Testimonios
        </h2>
        <hr className="w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 ml-4" />
      </div>
      <div className="w-full">
        <Carousel ref={carRef}>
          {TestimonialsData.map((testimonial) => (
            <div key={testimonial.name}>
              <div className="flex justify-center">
                <div className="xl:w-[1080px] w-full px-4">
                  <TestimonialsCard
                    name={testimonial.name}
                    title={testimonial.title}
                    testimony={testimonial.testimony}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="w-full flex justify-center z-10 relative">
          <div className="xl:w-[1280px] w-full flex justify-end overflow-visible xl:absolute xl:justify-between xl:bottom-24 mx-4 xl:mx-0">
            <button onClick={() => carRef.current.prev()} className="">
              <TfiArrowCircleLeft className="size-8 text-gray-400 mx-2" />
            </button>
            <button onClick={() => carRef.current.next()}>
              <TfiArrowCircleRight className="size-8 text-gray-400 mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Testimonials;

