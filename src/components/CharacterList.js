import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characters = props.characters.map((character) => {
    return (
      <li key={character.id} className="list">
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="container">{characters}</ul>
    </section>
  );
};
export default CharacterList;
