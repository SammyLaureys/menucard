import React, {useState} from 'react';
import styled from "@emotion/styled";
import 'normalize.css';
import './App.css';
import {Navigation} from "./components/navigation";
import {Category} from "./components/category";
import {Subcategory} from "./components/subcategory";
import {Productline} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";

const StyledOuterDiv = styled.div`
  padding: 0 3vw 0 2vw;
  padding-top: 80px;
`;

const StyledTestStuff = styled.div`
  background: pink;
  padding: 10px;
`;

function TestStuff(props) {
    const [isTestStuffOpen, setIsTestSTuffOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const {toggleProductIsFavorite} = props;

    return <StyledTestStuff>
        {
            isTestStuffOpen && <>
                <button onClick={() => setIsOpen(!isOpen)}>open-toe</button>
                <div>{isOpen ? "open" : "toe"}</div>
                <button onClick={() => setCounter(counter + 1)}>increment</button>
                <button onClick={() => setCounter(counter - 1)}>decrement</button>
                <div>{counter}</div>
                <button onClick={toggleProductIsFavorite}>favorite</button>
            </>
        }
        <div>
            <button
                onClick={() => setIsTestSTuffOpen(!isTestStuffOpen)}>{isTestStuffOpen ? "close" : "TestStuff"}</button>
        </div>
    </StyledTestStuff>;
}

function App() {
    const [favorites, setFavorites] = useState([]);

    function isFavorite(product) {
        return favorites.find((p) => product.id === p.id);
    }

    function toggleProductIsFavorite(product) {
        let newFavorites;
        if (isFavorite(product))
            newFavorites = favorites.filter((p) => product.id !== p.id);
        else
            newFavorites = [...favorites, product];
        setFavorites(newFavorites);
    }

    return (
        <StyledOuterDiv>
            <Navigation/>
            <TestStuff
                toggleProductIsFavorite={() => toggleProductIsFavorite(PRODUCTS_DATA[0].subcategories[0].products[0])}/>
            {PRODUCTS_DATA.map((c) =>
                <Category key={c.name} category={c}>
                    {c.subcategories.map((s) =>
                        <Subcategory key={s.name} subcategory={s}>
                            {s.products.map((p) =>
                                <Productline key={p.id} product={p} isFavorite={isFavorite(p)}
                                             toggleProductIsFavorite={() => toggleProductIsFavorite(p)}/>)}
                        </Subcategory>)}
                </Category>)}
        </StyledOuterDiv>
    )
}

export default App;