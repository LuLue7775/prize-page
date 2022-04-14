import React from 'react';
import PropTypes from 'prop-types';
import Flip from '../element/Flip';

import styled from 'styled-components';

const TimerFlipSec = ({ displaySec = 0 }) => {
  return (
    <StyledFlip>
      <Flip value={displaySec} />
    </StyledFlip>
  );
};
export default React.memo(TimerFlipSec);

TimerFlipSec.propTypes = {
  displaySec: PropTypes.number
};

const StyledFlip = styled.div`
  display: inline-block;
  margin: 0.2em;
  font-size: 2em;
`;
