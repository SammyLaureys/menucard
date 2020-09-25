import React from 'react';
import './App.css';

const PRODUCTS_DATA = [
    {
        name: "drank",
        products: [
            {name: "cola", price: 2},
            {name: "water", price: 2},
            {name: "bier", price: 2, size: 25},
            {name: "wijn", price: 4}
        ],
    },
    {
        name: "eten",
        note: "een klein hapje voor de snelle honger",
        products: [
            {name: "chips", price: 1, note: "paprika of zout"},
            {name: "olijven", price: 2, note: "mix zwart en groen"},
            {name: "kaas", price: 4, note: "mix jonge en oude blokjes"},
            {name: "salami", price: 3},
            {name: "hamburger", price: 4, note: "niet na 22:00"},
            {name: "pizza", price: 4, note: "niet na 22:00"}
        ]
    }
];

function Category(props) {
    const {category} = props;
    return <div>
        <h2>{category.name}</h2>
        <p className="note">{category.note}</p>
        {category.products.map((p) => <ProductLine key={p.name} product={p}/>)}
    </div>

}

function ProductLine(props) {
    const {product} = props;
    return <div>
        <div className="ProductLine">
            <div>{product.name}</div>
            <div>{product.price}&euro;</div>
            <div className="productSize">{product.size}</div>
        </div>
        <div className="note productNote">{product.note}</div>
    </div>
        ;

}

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <hr/>
            {
                PRODUCTS_DATA.map((c) =>
                    <Category key={c.name} category={c}/>
                )

            }

        </div>
    );
}

export default App;
