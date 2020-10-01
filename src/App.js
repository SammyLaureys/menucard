import React from 'react';
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
    const favorites = ['cola','bier groot','hamburger','pizza'];
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
            </StyledContainer>
        </div>
    )
}

export default App;
