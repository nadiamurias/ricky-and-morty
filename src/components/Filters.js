import React from "react";
import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";
import PropTypes from "prop-types";

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
Filters.propTypes = {
  handleFilter: PropTypes.func,
  status: PropTypes.string,
  name: PropTypes.string,
};
export default Filters;
