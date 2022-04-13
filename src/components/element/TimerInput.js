import React, {useState, useImperativeHandle, forwardRef, useRef, useEffect} from 'react';

import styled from "styled-components";

const TimerInput = ({ startCount, stopCount }) => {

  const [userInputMin, setUserInputMin] = useState('2') ;
  const [userInputSec, setUserInputSec] = useState('0') ;

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
    startCount(userInputMin, userInputSec);
  }

    useEffect(() => {
        stopCount();
    }, [userInputMin, userInputSec]);

  return (
    <StyledForm className="time-input" onSubmit={handleSubmit} >
        <StyledInput type='number' name='userInputMin' value={userInputMin} onChange={handleInputMin} min='0' max='59' required/> Min
        <StyledInput  type='number' name='userInputSec' value={userInputSec} onChange={handleInputSec} min='0' max='59' required/> Sec
        <StyledButton type="submit" value="Set and Start" />
    </StyledForm>
  )
}
export default React.memo(TimerInput);

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
