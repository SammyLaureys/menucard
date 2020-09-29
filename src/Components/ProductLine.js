import React from "react";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  text-align: right;
`;

export function ProductLine(props) {
    const {product} = props;
    return <div>
        <div className="ProductLine">
            <div>{product.name}<span className="productSize">{product.size}</span></div>
            <StyledProductLine>{product.price}&euro;</StyledProductLine>
        </div>
        <div className="note productNote">{product.note}</div>
    </div>
        ;
}