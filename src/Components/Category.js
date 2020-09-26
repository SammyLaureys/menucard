import React from "react";
import {SubCategory} from "./SubCategory";

export function Category(props) {
    const {category} = props;
    return <div>
        <h1>{category.name}</h1>
        <p className="note">{category.note}</p>
        {category.subcategories.map((sc) => <SubCategory key={sc.name} subcategory={sc}/>)}
    </div>
}