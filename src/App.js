import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <div className="nav">
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/" component={WelcomePage} />
      </div>
    </main>
  );
}
