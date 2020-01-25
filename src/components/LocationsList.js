import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response);
        setLocations(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid-view">
      {locations.map(location => {
        return <LocationCard key={location.id} {...location} />;
      })}
    </div>
  );
}
