import React from "react";
import styled from "@emotion/styled";
import {MdFavorite} from "react-icons/md";
import {StyledMenuIconButton} from "./ui/button";
import {BurgerWithMenu} from "./ui/burgermenu";


const StyledNavigation = styled.div`
    height: 64px;
    background-color: ${({theme}) => theme.colors.primaryDark};
    color:  ${({theme}) => theme.colors.primaryLight};
    text-align: center;
    padding: 0.8em 0.2em;
    position: fixed;
    top: 0;
    left: 0; right: 0;
    z-index: 30;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledLink = styled.a`
    text-decoration: none;
    padding: .2em .5em;
    ${({theme}) => theme.hoverLight};
`;
const StyledCenterDiv = styled.div`
    flex: 1;
    padding: .2em;
`;

const StyledSideBarContent = styled.div`
    padding: 15px 0;
`;


export function Navigation(props) {
    const {setIsFavoritesInfoBoxOpen, categories} = props;
    return <StyledNavigation>
        <BurgerWithMenu>
            {categories.map(c =>
                <StyledSideBarContent key={c.name}>
                    <StyledLink href={"#" + c.name}>{c.name}</StyledLink>
                </StyledSideBarContent>)}
        </BurgerWithMenu>
        <StyledCenterDiv><StyledLink href="/">Menu</StyledLink></StyledCenterDiv>
        <StyledMenuIconButton onClick={() => setIsFavoritesInfoBoxOpen(true)}><MdFavorite/></StyledMenuIconButton>
    </StyledNavigation>;
}