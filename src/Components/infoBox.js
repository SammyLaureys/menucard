import React, {useState} from "react";
import styled from "@emotion/styled";

const StyledInfoBox = styled.div`
 background-color: cyan;
`;


export function InfoBox(props) {
    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(true);

    return <div>
        <button onClick={() => setIsInfoBoxOpen(!isInfoBoxOpen)}>{isInfoBoxOpen ? "x" : "+"}</button>
        <StyledInfoBox>
            {isInfoBoxOpen ?
                <div>
                    <h2>Je Favorieten</h2>
                    {props.children}
                </div> : ""}
        </StyledInfoBox>
    </div>;
}