import { useEffect, useState } from "react";
import PropTypees from "prop-types";

const TimerDown = ({ count }) => {
  const [time, setTime] = useState(count || 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (time <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time]);
  return <div className="text-5xl">{time}</div>;
};

TimerDown.propTypes = {
  count: PropTypees.number.isRequired,
};

export default TimerDown;
