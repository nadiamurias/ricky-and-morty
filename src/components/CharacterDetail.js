import React from "react";
import { Link } from "react-router-dom";
import PhotoNotFound from "../images/advertencia.png";
import PhotoLoading from "../images/loading.png";
import "../stylesheets/Characterdetail.scss";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const status = () => {
    if (props.character.status === "Alive") {
      return (
        <li className="list-detail">Status: {props.character.status} ❤️</li>
      );
    } else if (props.character.status === "Dead") {
      return (
        <li className="list-detail">Status: {props.character.status} 💀</li>
      );
    } else if (props.character.status === "unknown") {
      return (
        <li className="list-detail">Status: {props.character.status} 🤷🏻‍♀️</li>
      );
    }
  };
  if (props.isLoading) {
    return (
      <div className="loading">
        <h2 className="title-loading">Loading...</h2>
        <img className="image-loading" src={PhotoLoading} alt="loading" />
      </div>
    );
  } else if (props.character === undefined) {
    return (
      <div className="not-found">
        <img className="image-not-found" src={PhotoNotFound} alt="Not found" />
        <div className="container-not-found">
          <h2 className="title-not-found">Oops!</h2>
          <h3 className="subtitle-not-found">
            Sorry... but we couldn´t find the character
          </h3>
          <Link to={"/"} className="detail-link">
            <button className="back-not-found">Back to homepage</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Link to={"/"} className="detail-link">
          <p className="back"> {"<"} Volver</p>
        </Link>
        <div className="detail">
          <img
            className="image-detail"
            src={props.character.image}
            alt={props.character.name}
          />
          <div className="character-details">
            <h3 className="name-detail">{props.character.name}</h3>
            <ul>
              {status()}
              <li className="list-detail">
                Species: {props.character.species}
              </li>
              <li className="list-detail">Origin: {props.character.origin}</li>
              <li className="list-detail">
                Episodes: {props.character.episode.length}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
    origin: PropTypes.string,
    specie: PropTypes.string,
    episode: PropTypes.string,
  }),
};
export default CharacterDetail;
