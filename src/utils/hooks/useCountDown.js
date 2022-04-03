import React, { useState, useRef, useEffect, useContext } from 'react'
import { WinnerContext } from '../../context/winner.context'
import { useSelector } from 'react-redux'

import { selectPrizeDrawerList } from '../../redux/follower/follower.selector'


const convertTimeToSecs = ( userSetMin, userSetSec ) => {

    return  parseInt(userSetMin, 10)*60 + parseInt(userSetSec, 10)
}

export const formatTime = (secs) => {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
        "m": minutes,
        "s": seconds
    };
    return obj;
} 

export default function useCountDown( userSetMin, userSetSec ) {
    const {winner, setWinner} = useContext(WinnerContext);
    const prizeDrawers = useSelector(selectPrizeDrawerList)

    const userSetTime = useRef( convertTimeToSecs(userSetMin, userSetSec) )
        
    const [ startTimeStamp, setTimeStamp ] = useState()
    const [ remainTime, setRemainTime ] = useState( userSetTime.current )
    
    const [ isStarted , setIsStarted ] = useState(false)
    const intervalId = useRef(0) 

    const startCount = () => {
        setIsStarted(true)
        setTimeStamp( new Date().getTime() )
    }
    
    const setCount = () => {
        userSetTime.current = convertTimeToSecs(userSetMin, userSetSec)
        setRemainTime(userSetTime.current)
    }

    useEffect(() => {
        if (!isStarted) return

        intervalId.current = setInterval( () => {
            isStarted && 
            remainTime > 0 && 
            setRemainTime( userSetTime.current - Math.floor((new Date().getTime() - startTimeStamp) / 1000), 1000 ); 
        } )
        
        if ( remainTime === 0 ) {
            clearInterval(intervalId.current);
            setIsStarted(false)
            setRemainTime(userSetTime.current)
            
            
            setWinner( prizeDrawers[ Math.floor(Math.random()*prizeDrawers.length) ] )
        }

        return () => clearInterval(intervalId.current);
    }, [ isStarted, remainTime ])


    

    return [ remainTime, isStarted,  setCount, startCount ]
}
