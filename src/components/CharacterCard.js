import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const CharacterCard = (props) => {
  return (
    <>
      <Link
        to={`/character/${props.character.id}`}
        style={{ textDecoration: "none", color: "#ffffff" }}
      >
        <img
          className="image"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="description">
          <h3 className="name-character">{props.character.name}</h3>
          <p className="specie-character">{props.character.species}</p>
        </div>
      </Link>
    </>
  );
};
export default CharacterCard;
