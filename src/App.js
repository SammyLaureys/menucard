import React, {useState} from 'react';
import styled from "@emotion/styled";
import 'normalize.css';
import './App.css';
import {Navigation} from "./components/navigation";
import {InfoBox} from "./components/infoBox";
import {Category} from "./components/category";
import {Subcategory} from "./components/subcategory";
import {Productline} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";

const StyledOuterDiv = styled.div`
  padding: 1% 3vw 3% 2vw;
`;

const StyledTestStuff = styled.div`
  background: grey;
  padding: 10px;
  margin-top: 3%;
  text-align: center;
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

    function BoxChildren() {
        if (favorites.length === 0){
            return "Je hebt nog geen favorieten.";
        }
          else{
              return favorites.map((p) =>
                      <Productline key={p.id} product={p} toggleProductIsFavorite={() => toggleProductIsFavorite(p)}/>)
        }
    }

    return (
        <div>
            <Navigation/>
            <TestStuff
                toggleProductIsFavorite={() => toggleProductIsFavorite(PRODUCTS_DATA[0].subcategories[0].products[0])}/>
            <StyledOuterDiv>

                <InfoBox
                    children= {BoxChildren()}/>

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
        </div>
    )
}

export default App;