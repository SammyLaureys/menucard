import React from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS_DATA = [
    {name: "cola", price: 2},
    {name: "water", price: 2},
    {name: "bier", price: 2},
    {name: "wijn", price: 4}
];

function ProductLine(props){
    const {product} = props;
    return <div className="ProductLine">
        <div>{product.name}</div>
        <div>{product.price}</div>
    </div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu</h1>
          <ProductLine product={PRODUCTS_DATA[0]}/>
          <ProductLine product={PRODUCTS_DATA[1]}/>
          <ProductLine product={PRODUCTS_DATA[2]}/>
          <ProductLine product={PRODUCTS_DATA[3]}/>
      </header>
    </div>
  );
}

export default App;
