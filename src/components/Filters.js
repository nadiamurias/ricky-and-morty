import React from "react";
import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterByStatus
          handleFilter={props.handleFilter}
          status={props.status}
        />
      </form>
    </section>
  );
};
export default Filters;
