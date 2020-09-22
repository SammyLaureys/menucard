import React from 'react';
import './App.css';

const PRODUCTS_DATA = [
    {
        type: "drank",
        products: [
            {name: "cola", price: "2€"},
            {name: "water", price: "2€"},
            {name: "bier", price: "2€"},
            {name: "wijn", price: "4€"}
        ],
    },
    {
        type: "eten",
        products: [
            {name: "chips", price: "1€"},
            {name: "olijven", price: "2€"},
            {name: "kaas", price: "4€"},
            {name: "salami", price: "3€"},
            {name: "hamburger", price: "4€"},
            {name: "pizza", price: "4€"}
        ]
    }
];

function CategoryLine(props) {
    const {category} = props;
    return <div className="CategoryLine">
        <div><strong>{category.type}</strong></div>
    </div>;
}

function ProductLine(props) {
    const {product} = props;
    return <div className="ProductLine">
        <div>{product.name}</div>
        <div>{product.price}</div>
    </div>;
}

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {PRODUCTS_DATA.map((p) =>
                <CategoryLine key={p.type} category={p}/>)}
        </div>
    );
}

export default App;
