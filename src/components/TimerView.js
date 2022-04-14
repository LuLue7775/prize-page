import React from 'react';
import useCountDown from '../utils/hooks/useCountDown';

import TimerInput from './element/TimerInput';
import TimerFlips from './element/TimerFlips';

import styled from 'styled-components';

export default function TimerView() {
  const [startCount, stopCount, displayMin, displaySec] = useCountDown();
  return (
    <StyledTimerWrapper className="timer-wrapper">
      <TimerFlips displayMin={displayMin} displaySec={displaySec} />
      <TimerInput startCount={startCount} stopCount={stopCount} />
    </StyledTimerWrapper>
  );
}

const StyledTimerWrapper = styled.div`
  height: 150px;
  margin: 0 auto;
  padding-top: 1.5em;
`;
