import React from 'react'
import Flip from '../element/Flip';

import styled from "styled-components";

const TimerFlipSec = ({ displaySec = 0 }) => {
  return (
    <StyledFlip> 
        <Flip value={displaySec}/>  
    </StyledFlip>
  )
}
export default React.memo(TimerFlipSec);

const StyledFlip = styled.div`
  display:inline-block;
  margin: .2em;
  font-size:2em;
`
