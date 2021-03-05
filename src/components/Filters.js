import React from "react";
import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleInput={props.handleInput} name={props.name} />
        <FilterByStatus handleInput={props.handleInput} />
      </form>
    </section>
  );
};
export default Filters;
