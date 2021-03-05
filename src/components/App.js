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
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      if (status === "all") {
        return true;
      } else {
        return character.status === status;
      }
    });
  console.log(filterCharacters);

  const handleFilter = (inputValue) => {
    console.log(inputValue);
    if (inputValue.key === "name") {
      setName(inputValue.value);
    } else if (inputValue.key === "status") {
      setStatus(inputValue.value);
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
            <Filters handleFilter={handleFilter} name={name} status={status} />
            <CharacterList
              characters={filterCharacters}
              name={name}
              status={status}
            />
          </Route>
          <Route path="/character/:id" render={renderDetail} />
        </Switch>
      </div>
    </>
  );
};
export default App;
