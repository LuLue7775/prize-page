import React, {useState, useEffect} from 'react';
import useCountDown, { formatTime } from '../utils/hooks/useCountDown';

export default function TimerView() {

  const [userInputMin, setUserInputMin] = useState(2);
  const [userInputSec, setUserInputSec] = useState(0);
  const [displayMin, setDisplayMin] = useState(0);
  const [displaySec, setDisplaySec] = useState(0);

  const [ remainTime, isStarted,  setCount, startCount  ] = useCountDown( userInputMin, userInputSec );

  const handleInputMin = e => {
    e.preventDefault();
    setUserInputMin( e.target.value );
  }

  const handleInputSec = e => {
    e.preventDefault();
    setUserInputSec( e.target.value );  
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
    <>
        <span>{ displayMin } min</span>
        <span>{ displaySec } sec </span>
        <form onSubmit={handleSubmit} >
          <label > 
            <input type='number' name='userInput' value={userInputMin} min='0' onChange={handleInputMin}/> Minutes
            <input type='number' name='userInput' value={userInputSec} min='0' onChange={handleInputSec}/> Seconds
          </label>
          <input type="submit" value="Set and Start" />
        </form>
    </>
  );
}
