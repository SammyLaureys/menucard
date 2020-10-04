import React, {useState} from "react";
import styled from "@emotion/styled";

const StyledBackground = styled.div`
  background-color: darkgray;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
`;
const StyledButton = styled.button`
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
  padding-top: 1%;
  padding-bottom: 1%;
`;

function openOrClose() {
    let x = document.getElementById("buttonDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('openOrCloseButton').innerText = 'Close';
    } else {
        x.style.display = "none";
        document.getElementById('openOrCloseButton').innerText = 'testStuff';
    }
}
export function TestStuff() {
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    return <div><StyledButton id={"openOrCloseButton"} onClick={openOrClose}>Close</StyledButton>
    <StyledBackground id={"buttonDiv"}>
        <button onClick={() => setIsOpen(!isOpen)}>click</button>
        <div>{isOpen ? "open" : "toe"}</div>
        <button onClick={() => setCounter(counter+1)}>increment</button>
        <button onClick={() => setCounter(counter-1)}>decrement</button>
        <div>{counter}</div>
    </StyledBackground></div>;
}