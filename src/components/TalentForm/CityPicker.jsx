import { useState } from "react";
import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import cityData from "./cityData";
import PropTypes from "prop-types";

const CityPicker = ({ className }) => {
  const countyList = Object.keys(cityData);
  const [cities, setCities] = useState(cityData["MONTEVIDEO"]);

  const handleCountyChange = (value) => {
    setCities(cityData[value]);
  };

  return (
    <>
      <div className={className}>
        <label htmlFor="register_county">Departamento</label>
        <FormItem name="county" initialValue="MONTEVIDEO">
          <Select
            id="regiter_county"
            options={countyList.map((county) => ({
              label: county,
              value: county,
            }))}
            onChange={handleCountyChange}
          />
        </FormItem>
      </div>
      <div className={className}>
        <label htmlFor="register_city">Ciudad</label>
        <FormItem name="city">
          <Select
            options={cities.map((city) => ({ label: city, value: city }))}
          />
        </FormItem>
      </div>
    </>
  );
};

CityPicker.propTypes = {
  className: PropTypes.string, // Add prop types validation for className
};

export default CityPicker;
