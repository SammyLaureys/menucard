import React from "react";
import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";
import '../../App.css';

const StyledNavigation = styled.div`
    height: 64px;
    background-color: ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.colors.primaryLight}
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

export function Navigation(setIsInfoBoxOpen) {
    return <StyledNavigation>
        <FaBars/>
        <Link href="/">Menu</Link>
    </StyledNavigation>;
}