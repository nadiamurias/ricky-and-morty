import React, { useState, useEffect } from "react";

const CharacterCard = (props) => {
  return (
    <>
      <img
        className="image"
        src={props.character.image}
        alt={props.character.name}
      />
      <div className="description">
        <h3 className="name-character">{props.character.name}</h3>
        <p className="specie-character">{props.character.species}</p>
      </div>
    </>
  );
};
export default CharacterCard;
