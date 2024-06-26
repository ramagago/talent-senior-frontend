import { useState } from "react";
import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import cityData from "./cityData";
import PropTypes from "prop-types";

const CityPicker = ({ className, county, city, disabled=false }) => {
  const countyList = Object.keys(cityData);
  const [cities, setCities] = useState(cityData["MONTEVIDEO"]);

  const handleCountyChange = (value) => {
    setCities(cityData[value]);
  };

  return (
    <>
      <div className={className}>
        <label htmlFor={county}>Departamento</label>
        <FormItem name={county} initialValue="MONTEVIDEO">
          <Select
            id={county}
            options={countyList.map((county) => ({
              label: county,
              value: county,
            }))}
            onChange={handleCountyChange}
            disabled={disabled}
          />
        </FormItem>
      </div>
      <div className={className}>
        <label htmlFor={city}>Ciudad</label>
        <FormItem name={city}>
          <Select
            options={cities.map((city) => ({ label: city, value: city }))}
            disabled={disabled}
          />
        </FormItem>
      </div>
    </>
  );
};

CityPicker.propTypes = {
  className: PropTypes.string,
  county: PropTypes.string,
  city: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,

};

export default CityPicker;
