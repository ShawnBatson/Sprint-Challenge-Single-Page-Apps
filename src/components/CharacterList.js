import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/documentation/?name=${search}")
      .then(res => {
        setCharacter(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log("You have encountered an error", err);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [search]);

  return (
    <section className="character-list">
      <div></div>
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
