import React, { useState, useEffect } from "react";

const CharacterDetail = (props) => {
  return (
    <>
      <p>Volver</p>
      <div>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Origin: {props.character.origin}</p>
        <p>Episodes: {props.character.episodes}</p>
      </div>
    </>
  );
};
export default CharacterDetail;
