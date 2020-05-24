import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ onSearch, charName, setCharName }) {
  const handleChange = event => {
    setCharName(event.target.value);
  };

  return (
    <form>
      <label>
        <h3>Search Characters</h3>
        <input
          onChange={handleChange}
          type="text"
          value={charName}
          placeholder="Search"
        />
      </label>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}
