import React from "react";
import styled from "@emotion/styled";

const StyledNav = styled.div`
  position: fixed;
  width: 100%;
  padding: 1em 0 1em 0;
  background-color: black;
  text-align: center;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
    :hover{
    color: rgb(162,18,18);
  }
`;

export function Navigation() {
    return <div>
        <StyledNav>
            <StyledLink href="#top">Menu</StyledLink>
        </StyledNav>
    </div>;
}