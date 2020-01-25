import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  width: 30%;
  margin: 1%;
  min-height: 150px;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h1>Name:{props.name}</h1>
      <img src={`${props.image}`} />
      <div>{props.species}</div>
    </Card>
  );
}
