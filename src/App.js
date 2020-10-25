import React from 'react';
import {ThemeProvider} from "emotion-theming";
import {HashRouter, Switch, Route} from "react-router-dom";
import 'normalize.css';
import './App.css';
import {theme} from "./theme";
import {Navigation} from "./components/navigation";
import {PRODUCTS_DATA} from "./data/products_data";
import {StyledOuterDiv} from "./components/ui/infobox";
import {MenuCardPage} from "./components/menucardpage";
import {ProductInfoBox} from "./components/productinfobox";
import {Message} from "./components/ui/message";
import {MessageProvider} from "./contexts/message_context";
import {ActiveProductProvider} from "./contexts/activeproduct_context";
import {FavoritesProvider} from "./contexts/favorites_context";
import {FavoritesPage} from "./components/favoritespage";
import {FLAT_PRODUCT_DATA} from "./utilities/flat_product_data";
import {TablePage} from "./components/tablepage";

function ProvidedApp() {

    return (
        <HashRouter basename="/">
            <StyledOuterDiv>
                <Navigation categories={PRODUCTS_DATA}/>
                <Message/>
                <ProductInfoBox flatProductList={FLAT_PRODUCT_DATA}/>
                <Switch>
                    <Route path="/favorites">
                        <FavoritesPage/></Route>
                    <Route path={["/", "menucard", "menu"]}>
                        <MenuCardPage productsData={PRODUCTS_DATA}/></Route>
                    <Route path={["/table/:tableNumberFromUrl"]}>
                        <TablePage/></Route>
                </Switch>
            </StyledOuterDiv>
        </HashRouter>
    )
}

function App() {
    return <ThemeProvider theme={theme}>
        <MessageProvider>
            <FavoritesProvider>
                <ActiveProductProvider>
                    <ProvidedApp/>
                </ActiveProductProvider>
            </FavoritesProvider>
        </MessageProvider>
    </ThemeProvider>;
}


export default App;
