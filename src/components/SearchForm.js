import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ onSearch, charName, setCharName }) {
  const handleChange = event => {
    setCharName(event.target.value);
    console.log(charName);
  };

  return (
    <form onSubmit={() => onSearch(charName)}>
      <label>
        <h3>Search Characters</h3>
        <input
          onChange={handleChange}
          placeholder="name"
          value={charName}
          name="name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
