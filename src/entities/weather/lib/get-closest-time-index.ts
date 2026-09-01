export const getClosestTimeIndex = (isoTimes: string[], targetTime: number): number => {
  if (isoTimes.length === 0) {
    throw new Error('Cannot find the closest time in an empty collection');
  }

  let closestIndex = 0;

  isoTimes.forEach((time, index) => {
    const difference = Math.abs(Date.parse(`${time}Z`) - targetTime);
    const closestDifference = Math.abs(Date.parse(`${isoTimes[closestIndex]}Z`) - targetTime);
    if (difference < closestDifference) closestIndex = index;
  });

  return closestIndex;
};
