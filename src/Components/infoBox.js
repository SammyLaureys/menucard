import React, {useState} from "react";
import styled from "@emotion/styled";

const StyledInfoBox = styled.div`
 border-radius: 10px;
 box-shadow: 0 0 10px 2px gray;
 position: fixed;
 background-color: white;
 width: 100%;
 height: 100%;
 padding-left: 3%;
 padding-right: 3%;
 transition: transform .3s;
`;
const StyledButton = styled.button`
 margin-top: 8%;
 margin-left: 4%;
`;

export function InfoBox(props) {
    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
    const styles1 = {
        transform: `translateY(0%)`
    };
    const styles2 = {
        transform: `translateY(100%)`
    };
    return <div>
        <StyledButton onClick={() => setIsInfoBoxOpen(!isInfoBoxOpen)}>{isInfoBoxOpen ? "x" : "+"}</StyledButton>
        <div>
            {isInfoBoxOpen ?
            <StyledInfoBox style={styles1}>
                    <div>
                        <h2>Je Favorieten</h2>
                        {props.children}
                    </div>
            </StyledInfoBox>
                : <StyledInfoBox style={styles2}>
                    <div>
                        <h2>Je Favorieten</h2>
                        {props.children}
                    </div>
                </StyledInfoBox>}
        </div>
    </div>;
}