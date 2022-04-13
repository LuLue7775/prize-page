import React from 'react'
import Flip from '../element/Flip';

import styled from "styled-components";

const TimerFlipMin = ({ displayMin = 0 }) => {
  return (
    <StyledFlip> 
        <Flip value={displayMin}/>  
    </StyledFlip>
  )
}
export default React.memo(TimerFlipMin);

const StyledFlip = styled.div`
  display:inline-block;
  margin: .2em;
  font-size:2em;
`
