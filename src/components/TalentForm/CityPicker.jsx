import { useState } from "react";
import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import cityData from "./cityData";
import PropTypes from "prop-types";

<<<<<<< HEAD
const CityPicker = ({ className, county, city }) => {
=======
const CityPicker = ({ className }) => {
>>>>>>> main
  const countyList = Object.keys(cityData);
  const [cities, setCities] = useState(cityData["MONTEVIDEO"]);

  const handleCountyChange = (value) => {
    setCities(cityData[value]);
  };

  return (
    <>
      <div className={className}>
<<<<<<< HEAD
        <label htmlFor={county}>Departamento</label>
        <FormItem name={county} initialValue="MONTEVIDEO">
          <Select
            id={county}
=======
        <label htmlFor="register_county">Departamento</label>
        <FormItem name="county" initialValue="MONTEVIDEO">
          <Select
            id="regiter_county"
>>>>>>> main
            options={countyList.map((county) => ({
              label: county,
              value: county,
            }))}
            onChange={handleCountyChange}
          />
        </FormItem>
      </div>
      <div className={className}>
<<<<<<< HEAD
        <label htmlFor={city}>Ciudad</label>
        <FormItem name={city}>
=======
        <label htmlFor="register_city">Ciudad</label>
        <FormItem name="city">
>>>>>>> main
          <Select
            options={cities.map((city) => ({ label: city, value: city }))}
          />
        </FormItem>
      </div>
    </>
  );
};

CityPicker.propTypes = {
<<<<<<< HEAD
  className: PropTypes.string,
=======
  className: PropTypes.string, // Add prop types validation for className
>>>>>>> main
};

export default CityPicker;
