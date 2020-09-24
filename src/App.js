import React from 'react';
import './App.css';

const PRODUCTS_DATA = [
    {
        name: "drank",
        products: [
            {name: "cola", price: 2},
            {name: "water", price: 2},
            {name: "bier", price: 2},
            {name: "wijn", price: 4}
        ],
    },
    {
        name: "eten",
        products: [
            {name: "chips", price: 1},
            {name: "olijven", price: 2},
            {name: "kaas", price: 4},
            {name: "salami", price: 3},
            {name: "hamburger", price: 4},
            {name: "pizza", price: 4}
        ]
    }
];

function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name}</div>
        <div>{product.price}&euro;</div>
    </div>;
}

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <hr/>
            {
                PRODUCTS_DATA.map((c) =>
                    <div key={c.name}>
                        <h2>{c.name}</h2>
                        {c.products.map((p) => <ProductLine key={p.name} product={p}/>)}
                    </div>
                )
            }
        </div>
    );
}

export default App;
