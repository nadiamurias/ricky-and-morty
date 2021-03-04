import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div className="not-found">
        <h2 className="title-not-found">Oops!</h2>
        <h3 className="subtitle-not-found">We can´t find the character</h3>
      </div>
    );
  } else {
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
  }
};
export default CharacterList;
