import React from "react";
import {Note} from "./note";
import styled from '@emotion/styled';

const StyledCategoryNote = styled(Note)`
  padding: 0 0 0.5em 0;
`;

const StyledH1 = styled.h1`
    border-top: solid thin;
    padding-top: 16px;
`;


export function Category(props) {
    const {category} = props;
    return <div>
        <StyledH1>{category.name}</StyledH1>
        <StyledCategoryNote note={category.note}/>
        {props.children}
    </div>;
}