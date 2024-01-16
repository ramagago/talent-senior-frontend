import data from "./data";

const Purpose = () => {
  return (
    <div className=" relative top-48 max-w-7xl flex text-right flex-col">
      <h1 className="text-azul01 text-7xl font-bold mt-16 mb-4">
        {data.title}
      </h1>
      <hr className="max-w-48 bg-azul01 h-2 mb-10" />

      <div className="flex">
        <img src={data.img} alt="" />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Purpose;
