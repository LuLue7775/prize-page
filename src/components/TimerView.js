import React, {useState, useEffect} from 'react';
import useCountDown, { formatTime } from '../utils/hooks/useCountDown';

import styled from "styled-components";

import Flip from "./element/Flip";


export default function TimerView() {

  const [userInputMin, setUserInputMin] = useState(2) ;
  const [userInputSec, setUserInputSec] = useState(0) ;
  const [displayMin, setDisplayMin] = useState(0);
  const [displaySec, setDisplaySec] = useState(0);

  const [ remainTime, isStarted,  setCount, startCount  ] = useCountDown( userInputMin, userInputSec );

  const handleInputMin = e => {
    e.preventDefault();
    setUserInputMin(e.target.value);
  }

  const handleInputSec = e => {
    e.preventDefault();
    setUserInputSec(e.target.value);  
  }

  const handleSubmit = e => {
    e.preventDefault();
    startCount( userInputMin, userInputSec );
  }

  useEffect(() => {
    setCount( userInputMin, userInputSec );
    
  }, [userInputMin, userInputSec]);

  useEffect(() => {
    const formatted = formatTime(remainTime);
    setDisplayMin( formatted.m );
    setDisplaySec( formatted.s );
  }, [remainTime]);
  return (
    <StyledTimerWrapper className="timer-wrapper">

        <StyledFlip> 
          <Flip value={displayMin}/>  
        </StyledFlip>
        <StyledFlip> 
          :
        </StyledFlip>
        <StyledFlip>
          <Flip value={displaySec}/>  
        </StyledFlip>
        <StyledForm className="time-input" onSubmit={handleSubmit} >
          <StyledInput type='number' name='userInput' value={userInputMin} min='0' onChange={handleInputMin} required/> Min
          <StyledInput type='number' name='userInput' value={userInputSec} min='0' onChange={handleInputSec} required/> Sec
          <StyledButton type="submit" value="Set and Start" />
        </StyledForm>
    </StyledTimerWrapper>
  );
}


const StyledTimerWrapper = styled.div`
  height: 150px;
  margin: 0 auto;
  padding-top:1.5em;
`
const StyledFlip = styled.div`
  display:inline-block;
  margin: .2em;
  font-size:2em;
`
const StyledForm = styled.form`
  padding:1em;
  width:80%;
  margin: 0 auto;

  display:flex;
  justify-content: space-evenly ;
  align-items: center;
`
const StyledInput = styled.input`
  margin-left:1em;
  margin-right:1em;
  width:100%;
  min-width:40px;
  max-width:120px;
  padding:1em;
  box-sizing: border-box;    

  border-radius: 11px;
  --focus: 2px rgba(39, 94, 254, .25);
  outline: none;
  transition: box-shadow .2s;

  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  &:hover {
    background-color:#ffe7b3;
    transition: background-color .2s;
  }

`
const StyledButton = styled.input`
  margin-left:1em;
  margin-right:1em;
  max-width:100px;
  width:100%;

  height:40px;
  border-radius: 11px;
  &:hover {
    background-color:#ffe7b3;
    transition: background-color .4s;

  }
`
