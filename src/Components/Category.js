import React from "react";
import {SubCategory} from "./SubCategory";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  border-top: solid thin;
  padding-top: 16px;
`;

export function Category(props) {
    const {category} = props;
    return <div>
        <StyledH1>{category.name}</StyledH1>
        <p className="note">{category.note}</p>
        {category.subcategories.map((sc) => <SubCategory key={sc.name} subcategory={sc}/>)}
    </div>
}