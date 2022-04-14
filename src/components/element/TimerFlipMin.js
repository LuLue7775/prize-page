import React from 'react';
import PropTypes from 'prop-types';
import Flip from '../element/Flip';

import styled from 'styled-components';

const TimerFlipMin = ({ displayMin = 0 }) => {
  return (
    <StyledFlip>
      <Flip value={displayMin} />
    </StyledFlip>
  );
};
export default React.memo(TimerFlipMin);

TimerFlipMin.propTypes = {
  displayMin: PropTypes.number
};

const StyledFlip = styled.div`
  display: inline-block;
  margin: 0.2em;
  font-size: 2em;
`;
