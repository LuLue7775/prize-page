import React from 'react';
import PropTypes from 'prop-types';
import TimerFlipMin from './TimerFlipMin';
import TimerFlipSec from './TimerFlipSec';

import styled from 'styled-components';

export default function TimerFlips({ displayMin, displaySec }) {
  return (
    <>
      <TimerFlipMin displayMin={displayMin} />
      <StyledFlip> : </StyledFlip>
      <TimerFlipSec displaySec={displaySec} />
    </>
  );
}

TimerFlips.propTypes = {
  displayMin: PropTypes.number,
  displaySec: PropTypes.number
};

const StyledFlip = styled.div`
  display: inline-block;
  margin: 0.2em;
  font-size: 2em;
`;
