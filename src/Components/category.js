import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  border-top: solid thin;
  padding-top: 16px;
`;

const StyledCategoryNote = styled(Note)`
  padding: 0 0 0.5em 0;
  background-color: red;
`;

function CategoryNote(props) {
    return <StyledCategoryNote note={props.note} className={"categoryNote"}/>;
}

export function Category(props) {
    const {category} = props;
    return <div>
        <StyledH1>{category.name}</StyledH1>
        <CategoryNote note={category.note}/>
        {props.children}
    </div>;
}
