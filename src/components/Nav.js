import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.div`
  display: flex;
  width: 100%;
  height: 0, auto;
  flex-direction: row;
  flex-direction: space-evenly;
  border: 1px dotted black;
  height: 100px;
  border-radius: 25%;
  box-shadow: 5px 10px grey;
`;

const Linkage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-color: red;
`;

const Navigation = () => {
  return (
    <div>
      <Navi className="AppNav">
        <Linkage>
          <Link to="/">Home</Link>
        </Linkage>
        <Linkage>
          <Link to="CharacterList">Characters</Link>
        </Linkage>
        <Linkage>
          <Link to="/locations">Locations</Link>
        </Linkage>
      </Navi>
    </div>
  );
};

export default Navigation;
