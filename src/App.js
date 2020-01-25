import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Nav";

export default function App() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState({});

  const onSearch = name => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => {
        console.log(response);
        setSearch(response.data.result);
      })
      .catch(err => {
        console.log("You have encoutnered an error:", err);
      });
  };

  useEffect(() => {
    onSearch(name);
  }, [name]);

  return (
    <main>
      <Navigation />
      <Header />
      <div className="nav">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        <CharacterList />
        <SearchForm
          onSearch={onSearch}
          charName={name}
          setCharName={setName}
          search={search}
        />
      </div>
    </main>
  );
}
