import React from "react";

const FilterByStatus = (props) => {
  return (
    <select className="select">
      <option className="option" value="alive">
        Alive
      </option>
      <option className="option" value="dead">
        Dead
      </option>
      <option className="option" value="unknown">
        Unknown
      </option>
    </select>
  );
};
export default FilterByStatus;
