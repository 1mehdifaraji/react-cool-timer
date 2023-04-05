import { useState, useEffect } from "react";

export const useTimer = ({ timeInterval, onEndReached }) => {
  const [timeLeft, setTimeLeft] = useState(timeInterval);
  useEffect(() => {
    if (!timeLeft) {
      if (onEndReached) onEndReached();
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return { timeLeft };
};
