import React from "react";
import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };
  return (
    <select className="select" onChange={handleSelect}>
      <option className="option" value="all">
        All
      </option>
      <option className="option" value="Alive">
        Alive
      </option>
      <option className="option" value="Dead">
        Dead
      </option>
      <option className="option" value="unknown">
        Unknown
      </option>
    </select>
  );
};
FilterByStatus.propTypes = {
  handleFilter: PropTypes.func,
};
export default FilterByStatus;
