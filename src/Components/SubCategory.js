import React from "react";
import {Note} from "./note";

function SubCategoryNote(props) {
    return <Note note={props.note} className={"categoryNote"}/>;
}

export function SubCategory(props) {
    const {subcategory} = props;
    return <div>
        <h2>{subcategory.name}</h2>
        <SubCategoryNote note={subcategory.note}/>
        {props.children}
    </div>;
}