import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList({ filtered }) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.log("You have encountered an error", err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {filtered.map(char => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
          />
        );
      })}
    </section>
  );
}
