import React, { useState, useEffect } from 'react';
import TimeBox from './TimeBox';

const Timer =() => {

    const [expiryTime, setExpiryTime] = useState("01 jan 2023 00:00:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownlMinutes: "",
        countdownSeconds: "",
    });

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
        const newYearTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const totalSec = (newYearTime-currentTime)/1000;
    
        const dayRem= Math.floor(totalSec/3600/24);
        const hourRem= Math.floor(totalSec/3600)%24;
        const minRem= Math.floor(totalSec/60)%60;
        const secRem= Math.floor(totalSec)%60;
    
        const runningCountdownTime = {
          countDays: dayRem,
          countHours: hourRem,
          countMinutes: minRem,
          countSeconds: secRem,
        };
    
        setCountdownTime(runningCountdownTime);
    
        if (totalSec < 0) {
          clearInterval(timeInterval);
          setExpiryTime(false);
        }
      }, 1000);
    };

    useEffect(() => {
        countdownTimer();
    });

        return(
            <div className='flex flex-row justify-center mt-20'>
                <TimeBox mode={"days"} time={countdownTime.countDays}/>
                <TimeBox mode={"hours"} time={countdownTime.countHours}/>
                <TimeBox mode={"minutes"} time={countdownTime.countMinutes}/>
                <TimeBox mode={"seconds"} time={countdownTime.countSeconds}/>
            </div>
        );

}

export default Timer;