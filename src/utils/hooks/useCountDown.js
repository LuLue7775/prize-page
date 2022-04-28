import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrizeDrawerList } from '../../redux/follower/follower.selector';
import { setPrizeWinner } from '../../redux/follower/follower.action';

const convertTimeToSecs = (userSetMin, userSetSec) => {
  return parseInt(userSetMin, 10) * 60 + parseInt(userSetSec, 10);
};

export const formatTime = (secs) => {
  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    m: minutes,
    s: seconds
  };
  return obj;
};

export default function useCountDown() {
  const dispatch = useDispatch();
  const prizeDrawers = useSelector(selectPrizeDrawerList);

  const intervalId = useRef(0);
  const userSetTime = useRef();
  const displayMinRef = useRef();
  const displaySecRef = useRef();
  const [isStarted, setIsStarted] = useState(false);
  const [startTimeStamp, setTimeStamp] = useState();
  const [remainTime, setRemainTime] = useState(userSetTime.current);

  const startCount = (userSetMin, userSetSec) => {
    userSetTime.current = convertTimeToSecs(userSetMin, userSetSec);
    console.log(userSetMin, userSetSec);
    setRemainTime(userSetTime.current);
    setIsStarted(true);
    setTimeStamp(new Date().getTime());
    dispatch(setPrizeWinner({}));
  };

  const stopCount = () => {
    setIsStarted(false);
  };

  useEffect(() => {
    if (!isStarted) return;

    intervalId.current = setInterval(() => {
      isStarted &&
        setRemainTime(
          userSetTime.current - Math.floor((new Date().getTime() - startTimeStamp) / 1000)
        );
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, [isStarted, startTimeStamp]);

  useEffect(() => {
    if (!isStarted) return;

    if (remainTime === 0) {
      clearInterval(intervalId.current);
      setIsStarted(false);
      setRemainTime(0);

      dispatch(setPrizeWinner(prizeDrawers[Math.floor(Math.random() * prizeDrawers.length)]));
      return;
    }

    const formatted = formatTime(remainTime);
    displaySecRef.current = formatted.s;
    displayMinRef.current = formatted.m;
  }, [remainTime]);

  return [startCount, stopCount, displayMinRef.current, displaySecRef.current];
}
