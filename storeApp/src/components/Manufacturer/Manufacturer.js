import React from "react";
import PropTypes from "prop-types";

const Manufacturer = ({ item, selectedManufacturer, onManufacturerChange }) => {
  return (
    <div>
      <input
        type="radio"
        name="manufacturere"
        id={item}
        value={item}
        checked={selectedManufacturer === item}
        onChange={onManufacturerChange}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

Manufacturer.propTypes = {
  item: PropTypes.string.isRequired,
  selectedManufacturer: PropTypes.string.isRequired,
  onManufacturerChange: PropTypes.func.isRequired
};

export default Manufacturer;
