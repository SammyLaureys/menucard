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
  padding: 0 3vw 3% 2vw;
`;

const StyledOverlay = styled.div`
  background: transparent;
  
`;

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
        <StyledOverlay>
            <Navigation/>
            <InfoBox children= {BoxChildren()}/>
            <StyledOuterDiv>
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
        </StyledOverlay>
    )
}

export default App;