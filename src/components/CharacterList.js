import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/documentation/")
      .then(res => {
        setCharacter(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log("You have encountered an error", err);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <div>
        {character.map(char => {
          return (
            <div className="char-card">
              <h1>{char.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
