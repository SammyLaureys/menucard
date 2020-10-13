import React from "react";
import {InfoBox} from "./ui/infobox";
import {ProductLine} from "./product/productline";

export function FavoritesInfoBox(props) {
    const {favorites, isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen, setActiveProduct} = props;
    return <InfoBox isInfoBoxOpen={isFavoritesInfoBoxOpen}
                    closeInfoBox={() => setIsFavoritesInfoBoxOpen(false)}>
        <h2>Je favorieten</h2>
        {!favorites.length ? "Je hebt nog geen favorieten." : null}
        {favorites.map((p) =>
            <ProductLine key={p.id} product={p}
                         setActiveProduct={setActiveProduct}/>)}

    </InfoBox>;

}