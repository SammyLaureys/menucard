import React from "react";
import styled from "@emotion/styled";
import {InfoBox} from "./ui/infobox";
import {ProductLine} from "./product/productline";
import {MdFavorite, MdFavoriteBorder, MdMessage} from "react-icons/md";
import {StyledInfoBoxIconButton} from "./ui/button";
import {useMessageContext} from "../contexts/MessageProvider";

const ProductInfoBoxContent = styled.div`
  position:relative;  
  padding: 2em 1em;
  height: 100%;
`;

const StyledBrewery = styled.div`
  padding: 1em 0 0 0;
  text-align: right;
  font-weight: bold;
  font-size: smaller;
`;

const StyledInfo = styled.div`
  padding: 1em 0;
  text-align: justify;
  font-size: smaller;
`;

const StyledButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
`;

export function ProductInfoBox(props) {
    const {activeProduct, setActiveProduct, isFavorite, toggleProductIsFavorite} = props;
    const isProductFavorite = isFavorite(activeProduct);
    const {setMessage} = useMessageContext();

    return <InfoBox isInfoBoxOpen={activeProduct != null}
                    closeInfoBox={() => setActiveProduct(null)}>
        {activeProduct &&
        <ProductInfoBoxContent>
            <ProductLine product={activeProduct}/>
            {activeProduct.brewery && <StyledBrewery>{activeProduct.brewery}</StyledBrewery>}
            {activeProduct.info && <StyledInfo>{activeProduct.info}</StyledInfo>}
            <StyledButtonDiv>
                <StyledInfoBoxIconButton onClick={toggleProductIsFavorite}
                                         color={isProductFavorite && "favoriteRed"}>
                    {isProductFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                </StyledInfoBoxIconButton>
                <StyledInfoBoxIconButton onClick={() => setMessage(`dit is een message over ${activeProduct.name}`)}>
                    <MdMessage/>
                </StyledInfoBoxIconButton>
            </StyledButtonDiv>
        </ProductInfoBoxContent>
        }
    </InfoBox>
}