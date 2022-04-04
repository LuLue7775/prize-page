import React, { useState, useRef, useEffect, useContext } from 'react'
import { WinnerContext } from '../../context/winner.context'

import styled, { keyframes } from "styled-components";

export default function WinnerModalView() {
    const { winner } = useContext(WinnerContext);
    const [ isModalShown, setShown ] = useState(false);
    const modalRef = useRef();
    const hasWinner = useRef(false);

    useEffect(() => {
      if ( Object.keys(winner).length === 0 ) return
      hasWinner.current = true;
      modalRef.current.style.opacity = 1;
      setShown(true);

      setTimeout(() => {
        modalRef.current.style.opacity = 0;
        setShown(false);
        hasWinner.current = false;
      }, 3000);

    }, [winner])

    return (
      <StyledModalWrapper>
        <StyledModal ref={modalRef} isModalShown={isModalShown} hasWinner={hasWinner}>
          <h2> We have a winner! </h2>  

        </StyledModal> 
      </StyledModalWrapper>
    )
};

const openAnimation = keyframes`
    0% { transform:translate(-50%, -150%); opacity: 0; }
    100% { transform:translate(-50%, -50%);  opacity: 1; }
`

const closeAnimation = keyframes`
    0% { transform:translate(-50%, -50%);  opacity: 1; }
    100% { transform:translate(-50%, -150%); opacity: 0; }
`

const StyledModalWrapper = styled.div`
    display:flex;
`
const StyledModal = styled.div`
    opacity:0;
    position:absolute;
    border:1px solid #000;
    border-radius: 10px;
    width:60%;
    height:30%;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    animation-name: ${({isModalShown, hasWinner}) => 
                        isModalShown !== null && hasWinner.current && ( isModalShown ? openAnimation: closeAnimation)};
    animation-duration: .6s;
    animation-timing-function:  cubic-bezier(0.68, -0.6, 0.32, 1.6);
    animation-iteration-count: 1;
    
    background-color:#002c24 !important;

`


