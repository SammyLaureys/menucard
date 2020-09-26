import React from "react";
import {ProductLine} from "./ProductLine";

export function SubCategory(props) {
    const {subcategory} = props;
    return <div>
        <h2>{subcategory.name}</h2>
        <p className="note">{subcategory.note}</p>
        {subcategory.products.map((p) => <ProductLine key={p.name} product={p}/>)}
    </div>
}