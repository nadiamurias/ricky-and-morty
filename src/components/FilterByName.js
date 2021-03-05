import React from "react";

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
      placeholder="Write the name of the character"
    />
  );
};
export default FilterByName;
