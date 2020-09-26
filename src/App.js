import React from 'react';
import './App.css';
import {PRODUCTS_DATA} from "./data/products_data";
import {Category} from "./Components/Category";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <hr/>
            {
                PRODUCTS_DATA.map((c) =>
                    <Category key={c.name} category={c}/>)
            }
        </div>
    );
}

export default App;
