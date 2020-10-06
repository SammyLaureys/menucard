import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
`;

const StyledProductLine = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 .3em 0;
  cursor: pointer;
  & div {
    flex: 1;
  }
`;

const StyledProductName = styled.div`
    flex: 6;
    color: ${(props) => props.isFavorite && "red"};
`;

const StyledProductDescription = styled.span`
  font-size: 0.6em;
`;

const StyledProductPrice = styled.div`
    flex: 2;
    text-align: right;
`;

export function ProductLine(props) {
    const {product, isFavorite, toggleProductIsFavorite} = props;
    return <>
        <StyledProductLine onClick={toggleProductIsFavorite}>
            <StyledProductName isFavorite={isFavorite}>
                {product.name}
                {product.size && <StyledProductDescription> • {product.size}CL</StyledProductDescription>}
            </StyledProductName>
            <StyledProductPrice>{product.price.toFixed(2)} &euro;</StyledProductPrice>
        </StyledProductLine>
        <StyledProductNote note={product.note}/>
    </>;
}