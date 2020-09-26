import React from "react";

export function ProductLine(props) {
    const {product} = props;
    return <div>
        <div className="ProductLine">
            <div>{product.name}<span className="productSize">{product.size}</span></div>
            <div>{product.price}&euro;</div>
        </div>
        <div className="note productNote">{product.note}</div>
    </div>
        ;
}