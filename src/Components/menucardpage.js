import {Category} from "./product/category";
import {SubCategory} from "./product/subcategory";
import {ProductLine} from "./product/productline";
import React from "react";

export function MenuCardPage(props) {
    const {productsData, isFavorite, toggleProductIsFavorite, setActiveProduct} = props;
    return <>
        {productsData.map((c) =>
            <Category key={c.name} category={c}>
                {c.subcategories.map((s) =>
                    <SubCategory key={s.name} subcategory={s}>
                        {s.products.map((p) =>
                            <ProductLine key={p.id} product={p} isFavorite={isFavorite(p)}
                                         toggleProductIsFavorite={() => toggleProductIsFavorite(p)}
                                         setActiveProduct={setActiveProduct}
                            />)}
                    </SubCategory>)}
            </Category>)}
    </>;
}