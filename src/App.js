import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import LocationsList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <div className="nav">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        <CharacterList />
      </div>
    </main>
  );
}
