import React, { useEffect, useState } from 'react'
import { animate } from "framer-motion";

const useAnimatedCounter = (
  maxValue: number,
  initialValue = 0,
  duration = 1,
) => {
  const [counter, setCounter] = useState<any>(initialValue);

  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      onUpdate(value) {
        setCounter(value.toFixed(0));
      }
    });
    return () => controls.stop();
  }, [initialValue, maxValue, duration]);

  return counter;
}

export default useAnimatedCounter
