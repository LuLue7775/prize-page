import React from 'react'
import TimerFlipMin from './TimerFlipMin';
import TimerFlipSec from './TimerFlipSec';

import styled from "styled-components";

export default function TimerFlips({ displayMin, displaySec }) {
  return (
    <>
        <TimerFlipMin displayMin={displayMin} />
        <StyledFlip> : </StyledFlip>
        <TimerFlipSec displaySec={displaySec} />
    </>
  )
}

const StyledFlip = styled.div`
  display:inline-block;
  margin: .2em;
  font-size:2em;
`
