import { useState, useEffect } from 'react';
import './CountdownTile.css';

const CountdownTile = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to get the next occurrence of November 6
  const getNextBirthday = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthday = new Date(currentYear, 10, 6); // Month is 0-indexed (10 = November)

    // If the birthday this year has already passed, use next year
    if (now > birthday) {
      birthday.setFullYear(currentYear + 1);
    }

    // Set birthday time to midnight in Nairobi timezone
    birthday.setHours(0, 0, 0, 0);

    return birthday;
  };

  useEffect(() => {
    const targetDate = getNextBirthday().getTime();

    const interval = setInterval(() => {
      const now = new Date();
      const nowInEAT = new Date(
        now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })
      );
      const distance = targetDate - nowInEAT.getTime();

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-tile">
      <div className="time-unit">
        <div className="value">{timeRemaining.days}</div>
        <div className="label">Days</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.hours}</div>
        <div className="label">Hours</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.minutes}</div>
        <div className="label">Minutes</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.seconds}</div>
        <div className="label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTile;
