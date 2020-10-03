import React, {useState} from 'react';
import 'normalize.css';
import './App.css';
import {Category} from "./components/category";
import {SubCategory} from "./components/subcategory";
import {ProductLine} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";
import {Navigation} from "./components/navigation";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  margin-left: 3vw;
  margin-right: 2vw;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const StyledH1 = styled.h1`
  padding-top: 20px;
`;

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const [favorites, setFavorites] = useState([]);
    let newFavorites = [];
    function ToggleProductIsFavorite(product){
        if(favorites.includes(product)){
            newFavorites = favorites.filter(favorites => favorites !== product);
            setFavorites(newFavorites);
            return newFavorites;
        }
        else{
            newFavorites = [...favorites, product];
            setFavorites(newFavorites);
            return newFavorites;
        }
    }
    function isFavorite(product){
        if(favorites.includes(product)){
            return true;
        }
        else{
            return false;
        }
    }
    return (
        <div>
            <Navigation/>
            <StyledContainer>
                <StyledH1>Menu</StyledH1>
                {PRODUCTS_DATA.map((c) =>
                    <Category key={c.name} category={c}>
                        {c.subcategories.map((s) =>
                            <SubCategory key={s.name} subcategory={s}>
                                {s.products.map((p) =>
                                    <ProductLine isFavorite={isFavorite(p)} key={p.id} product={p}/>)}
                            </SubCategory>)}
                    </Category>)}
                    <button onClick={() => setIsOpen(!isOpen)}>click</button>
                <div>{isOpen ? "open" : "toe"}</div>
                <button onClick={() => setCounter(counter+1)}>increment</button>
                <button onClick={() => setCounter(counter-1)}>decrement</button>
                <div>{counter}</div>
                <button onClick={() => ToggleProductIsFavorite([PRODUCTS_DATA[0].subcategories[0].products[0]])}>favorites</button>
            </StyledContainer>
        </div>
    )
}

export default App;
