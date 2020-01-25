import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
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
    <section className="character-list grid-view">
      {character.map(char => {
        return <CharacterCard key={char.id} character={character} />;
      })}
    </section>
  );
}
