import styled from "@emotion/styled";
import React from "react";

export const StyledOuterDiv = styled.div`
  padding: 0 3vw 0 2vw;
  padding-top: 80px;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(23, 23, 23, .04);
  z-index: 10;
`;
const StyledInfoBox = styled.div`
    position: fixed;
    background-color: ${({theme}) => theme.colors.primaryLight};
    box-shadow: ${(props) => props.isInfoBoxOpen ? 'rgba(23, 23, 23, .4) 0 0 48px' : 'none'};
    top: 120px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: .4em;
    border-radius: 5px;
    transform: translateY(${(props) => props.isInfoBoxOpen ? "0%" : "100%"});
    transition: transform .3s ease-in-out;
    z-index: 11;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    ${({theme}) => theme.hoverDark};
`;
export function InfoBox(props) {
    const {isInfoBoxOpen, closeInfoBox} = props;

    return <div>
        {isInfoBoxOpen && <StyledOverlay onClick={closeInfoBox}/>}
        {<StyledInfoBox isInfoBoxOpen={isInfoBoxOpen}>
            {props.children}
            <CloseButton onClick={closeInfoBox}>x</CloseButton>
        </StyledInfoBox>
        }
    </div>;
}