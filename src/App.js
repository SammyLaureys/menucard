import React, {useState} from 'react';
import 'normalize.css';
import './App.css';
import {Category} from "./components/category";
import {SubCategory} from "./components/subcategory";
import {ProductLine} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";
import {Navigation} from "./components/navigation";
import styled from "@emotion/styled";
import {TestStuff} from "./components/testStuff";

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
    const [favorites, setFavorites] = useState([]);
    // let newFavorites = [];
    /*function toggleProductIsFavorite(product){
        if(favorites.includes(product)){
            newFavorites = favorites.filter(product => favorites.includes(product));
        }
        else{
            newFavorites = [...favorites, product]
        }
        return newFavorites;
    }*/
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
                <button onClick={() => setFavorites([PRODUCTS_DATA[0].subcategories[0].products[0]])}>favorite</button>
                {/*<button onClick={() => toggleProductIsFavorite([PRODUCTS_DATA[0].subcategories[0].products[0]])}>favorite2</button>*/}
                {PRODUCTS_DATA.map((c) =>
                    <Category key={c.name} category={c}>
                        {c.subcategories.map((s) =>
                            <SubCategory key={s.name} subcategory={s}>
                                {s.products.map((p) =>
                                    <ProductLine isFavorite={isFavorite(p)} key={p.id} product={p}/>)}
                            </SubCategory>)}
                    </Category>)}
            </StyledContainer>
            <TestStuff/>
        </div>
    )
}

export default App;
