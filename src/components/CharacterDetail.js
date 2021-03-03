import React, { useState, useEffect } from "react";

const CharacterDetail = (props) => {
  const Episodes = props.character; //hacer map para sacar el length de los episodios
  return (
    <div>
      <img src={props.character.image} alt={props.character.name} />
      <h3>{props.character.name}</h3>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Origin: {props.character.origin}</p>
      <p>Episodes: {props.character.episodes}</p>
    </div>
  );
};
export default CharacterDetail;
