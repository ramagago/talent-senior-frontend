import { useRef } from "react";
import PropTypes from "prop-types";
import CollaboratorCard from "../CollaboratorCard";
import { AmbassadorsData } from "./data";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { strings } from "./strings"; // INFO: para importar strings

const Ambassadors = ({ id }) => {
  const list = useRef();

  return (
    <div
      className="scroll-mt-24 lg:scroll-mt-48 w-screen xl:w-[1280px]"
      id={id}
    >
      <h2 className="text-azul01 text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 mb-2 ml-4">
        {strings.title} {/* INFO: para usar strings como variables */}
      </h2>
      <hr className="w-16 sm:w-36 bg-azul01 h-1 sm:h-2 mb-10 ml-4" />
      <div className="w-full flex flex-col justify-center items-center z-10 relative">
        <div
          ref={list}
          className="overflow-x-auto whitespace-nowrap snap-x pb-4 w-5/6 xl:w-[1080px]"
        >
          {AmbassadorsData.map(({ img, name, title, linkedin }) => (
            <CollaboratorCard
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 inline-flex snap-start"
              key={name}
              imgSource={img}
              label={name}
              title={title}
              linkedin={linkedin}
            />
          ))}
        </div>
        <div className="w-full">
          <div className="xl:w-[1280px] w-full flex justify-end overflow-visible xl:absolute xl:justify-between xl:bottom-48 px-4 xl:mx-0">
            <button
              onClick={() => {
                console.log("LEFT");
                list.current.scrollTo({
                  left:
                    list.current.scrollRight +
                    list.current.scrollWidth / AmbassadorsData.length,
                  behavior: "smooth",
                });
              }}
            >
              <TfiArrowCircleLeft className="size-8 text-gray-400 mx-2" />
            </button>
            <button
              onClick={() =>
                list.current.scrollTo({
                  left:
                    list.current.scrollLeft +
                    list.current.scrollWidth / AmbassadorsData.length,
                  behavior: "smooth",
                })
              }
            >
              <TfiArrowCircleRight className="size-8 text-gray-400 mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Ambassadors.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Ambassadors;
