import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <div className="not-found">
        <h2 className="title-not-found">Oops!</h2>
        <h3 className="subtitle-not-found">We can´t find the character</h3>
        <Link to={"/"}>
          <p className="back">Back to home page</p>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <Link to={"/"}>
          <p className="back"> Volver</p>
        </Link>
        <div className="detail">
          <img
            className="image-detail"
            src={props.character.image}
            alt={props.character.name}
          />
          <h3 className="name-detail">Name: {props.character.name}</h3>
          <ul>
            <li>Status: {props.character.status}</li>
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.origin}</li>
            <li>Episodes: {props.character.episode.length}</li>
          </ul>
        </div>
      </>
    );
  }
};
export default CharacterDetail;
