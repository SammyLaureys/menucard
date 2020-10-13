import React, {useState} from 'react';
import 'normalize.css';
import './App.css';
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";
import {Navigation} from "./components/navigation";
import {PRODUCTS_DATA} from "./data/products_data";
import {StyledOuterDiv} from "./components/ui/infobox";
import {MenuCardPage} from "./components/menucardpage";
import {FavoritesInfoBox} from "./components/favoritesinfobox";
import {ProductInfoBox} from "./components/productinfobox";

function App() {
    const [favorites, setFavorites] = useState([]);
    const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState();

    function isFavorite(product) {
        return product && favorites.find((p) => product.id === p.id);
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
        <ThemeProvider theme={theme}>
            <StyledOuterDiv>
                <Navigation setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen} categories={PRODUCTS_DATA}/>
                <FavoritesInfoBox favorites={favorites}
                                  isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
                                  setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
                                  setActiveProduct={setActiveProduct}/>
                <ProductInfoBox activeProduct={activeProduct} setActiveProduct={setActiveProduct}
                                toggleProductIsFavorite={() => toggleProductIsFavorite(activeProduct)}
                                isFavorite={isFavorite}/>
                <MenuCardPage productsData={PRODUCTS_DATA} isFavorite={isFavorite}
                              setActiveProduct={setActiveProduct}/>
            </StyledOuterDiv>
        </ThemeProvider>
    )
}

export default App;
