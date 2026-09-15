export const getTimeInWaterMinutes = (castAt: number, now = Date.now()): number =>
  Math.max(0, Math.floor((now - castAt) / 60_000));
