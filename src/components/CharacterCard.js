import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  width: 0, auto;
  margin: 1%
  margin-top: 3%;
  min-height: 150px;
  box-shadow: 10px 20px grey;
`;

const H1 = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const H6 = styled.h6`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2%;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <H1>{props.name}</H1>
      <img src={`${props.image}`} />
      <H6>{props.species}</H6>
    </Card>
  );
}
