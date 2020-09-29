import React from 'react';
import {Category} from "./components/category";
import {SubCategory} from "./components/subcategory";
import {ProductLine} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";
import './App.css';

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {PRODUCTS_DATA.map((c) =>
                <Category key={c.name} category={c}>
                    {c.subcategories.map((s) =>
                        <SubCategory key={s.name} subcategory={s}>
                            {s.products.map((p) =>
                                <ProductLine key={p.id} product={p}/>)}
                        </SubCategory>)}
                </Category>)}
        </div>
    )
}

export default App;
