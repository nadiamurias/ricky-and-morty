import React from "react";
import CharacterCard from "./CharacterCard";
import PhotoNotFound from "../images/advertencia.png";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div className="not-found">
        <img className="image-not-found" src={PhotoNotFound} alt="Not found" />
        <div className="container-not-found">
          <h2 className="title-not-found">Oops!</h2>
          <h3 className="subtitle-not-found">
            Sorry... but we couldn´t find the character '{props.name}'
          </h3>
        </div>
      </div>
    );
  } else {
    const characters = props.characters.map((character) => {
      console.log(character);
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
CharacterList.propTypes = {
  name: PropTypes.string,
  characters: PropTypes.array,
};
export default CharacterList;
