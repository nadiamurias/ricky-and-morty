import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
  console.log(filterCharacters);

  const handleInput = (inputValue) => {
    // ev.preventDefault();
    if (inputValue.key === "name") {
      setName(inputValue.value);
    }
  };
  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });

    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <>
      <div className="page">
        <h1>
          <img className="title" src={logo} alt="Ricky and Morty" />
        </h1>
        <Switch>
          <Route exact path="/">
            <Filters
              handleInput={handleInput}
              name={name}
              species={species}
              status={status}
            />
            <CharacterList characters={filterCharacters} name={name} />
          </Route>
          <Route path="/character/:id" render={renderDetail} />
        </Switch>
      </div>
    </>
  );
};
export default App;
