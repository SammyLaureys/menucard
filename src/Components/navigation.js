import React from "react";
import styled from "@emotion/styled";

const StyledNavigation = styled.div`
    height: 64px;
    background-color: black;
    color: white;
    justify-content: center;
    text-align: center;
    padding: 0.8em 0;
    position: fixed;
    top: 0;
    left: 0; right: 0;
    z-index: 30;
    width: 100%;
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
    &:hover {
        background-color: white;
        color: black;
  }
`;

export function Navigation() {
    return <StyledNavigation>
        <Link href="/">Menu</Link>
    </StyledNavigation>;
}