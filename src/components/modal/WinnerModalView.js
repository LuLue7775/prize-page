import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from '../../utils/hooks/useWindowSize';

import { useSelector, shallowEqual } from 'react-redux';
import { selectPrizeWinner } from '../../redux/follower/follower.selector';

import styled, { keyframes } from 'styled-components';

export default function WinnerModalView() {
  const { width, height } = useWindowSize();

  const winner = useSelector(selectPrizeWinner, shallowEqual);
  const [isModalShown, setShown] = useState(false);

  let hasWinner = false;

  useEffect(() => {
    if (!winner || Object.keys(winner).length === 0) return;

    hasWinner = true;
    setShown(true);

    setTimeout(() => {
      setShown(false);
      hasWinner = false;
    }, 3000);
  }, [winner]);

  return (
    <StyledModalWrapper className="modal-wrapper">
      <StyledHide>
        <StyledModal className="modal" isModalShown={isModalShown} hasWinner={hasWinner}>
          <StyledTitle> We have a winner! </StyledTitle>
          <img src={winner?.picture?.large} alt="drawer" height="150px" width="150px" />
          <StyledDetail> {winner?.name?.first + ` ` + winner?.name?.last} </StyledDetail>
          <StyledDetail> @{winner?.login?.username} </StyledDetail>
          <StyledTitle> CONGRATS! </StyledTitle>
        </StyledModal>
      </StyledHide>

      {isModalShown !== null && isModalShown ? <Confetti width={width} height={height} /> : ''}
    </StyledModalWrapper>
  );
}

const openAnimation = keyframes`
    0% { transform:translate(-50%, -150%); opacity: 0; }
    100% { transform:translate(-50%, -50%);  opacity: 1; }
`;

const closeAnimation = keyframes`
    0% { transform:translate(-50%, -50%);  opacity: 0; }
    100% { transform:translate(-50%, -150%); opacity: 0; }
`;

const StyledModalWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  pointer-events: none;
  touch-action: none;
`;

const StyledHide = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const StyledModal = styled.div`
  opacity: ${({ isModalShown }) => (isModalShown ? 1 : 0)};
  transition: opacity 0.6s linear;

  position: absolute;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  animation-name: ${({ isModalShown, hasWinner }) =>
    isModalShown ? openAnimation : hasWinner && closeAnimation};
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  // animation-iteration-count: 1;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: rgb(175, 222, 250);
  background: linear-gradient(
    246deg,
    rgba(175, 222, 250, 0.3) 0%,
    rgba(135, 246, 255, 0.93) 50%,
    rgba(89, 181, 237, 0.9) 86%
  );
`;

const StyledDetail = styled.div`
  font-size: 1.1em;
  padding: 0.5em;
`;
const StyledTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;
