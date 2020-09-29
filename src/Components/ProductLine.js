import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;
  flex-direction: row;
  & div{
    flex: 1;
  }
`;

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
`;

const StyledProductSize = styled.span`
  font-size: 0.6em;
`;

const StyledProductPrice = styled.div`
  text-align: right;
`;

function ProductNote(props) {
    return <StyledProductNote note={props.note} className={"productNote"}/>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <StyledProductLine>
            <div>
                {product.name}
                {product.size && <StyledProductSize className="productSize">  • {product.size}CL</StyledProductSize>}
            </div>
            <StyledProductPrice>{product.price.toFixed(2)}&euro;</StyledProductPrice>
        </StyledProductLine>
        <ProductNote note={product.note}/>
    </>;
}