import { ISessionDurationUnits } from '../session.types';

export const formatSessionDuration = (
  startedAt: number,
  now: number,
  { hour, includeZeroHours = false, minute }: ISessionDurationUnits,
): string => {
  const totalMinutes = Math.max(0, Math.floor((now - startedAt) / 60_000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const minutesString = `${minutes}${minute}`;

  if (hours > 0 || includeZeroHours) {
    return `${hours}${hour} ${minutesString}`;
  }

  return minutesString;
};
