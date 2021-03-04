import React from "react";
import { Link } from "react-router-dom";

const CharacterNotFound = (props) => {
  return (
    <>
      <div className="not-found">
        <h2 className="">Oops!</h2>
        <h3 className="">We can´t find the character</h3>
        <Link to={"/"}>
          <p className="back">Back to home page</p>
        </Link>
      </div>
    </>
  );
};
export default CharacterNotFound;
