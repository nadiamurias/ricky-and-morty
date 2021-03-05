import React from "react";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <input
      className="input"
      type="text"
      onChange={handleChange}
      value={props.name}
      placeholder="Write the name"
    />
  );
};
FilterByName.propTypes = {
  handleFilter: PropTypes.func,
  name: PropTypes.string,
};
export default FilterByName;
