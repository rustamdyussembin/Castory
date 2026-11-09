import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

/** Current timestamp that refreshes every `updateIntervalMs` and when the app returns to the foreground. */
export const useNow = (updateIntervalMs: number): number => {
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const intervalId = setInterval(() => setNow(Date.now()), updateIntervalMs);
    const subscription = AppState.addEventListener('change', (status) => {
      if (status === 'active') setNow(Date.now());
    });

    return () => {
      clearInterval(intervalId);
      subscription.remove();
    };
  }, [updateIntervalMs]);

  return now;
};
