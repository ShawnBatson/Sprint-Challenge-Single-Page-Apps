import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-direction: space-evenly;
`;

const Linkage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Navigation = () => {
  return (
    <div>
      <Navi className="AppNav">
        <Linkage>
          <Link to="/">home</Link>
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
