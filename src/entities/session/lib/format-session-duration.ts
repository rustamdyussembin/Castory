interface SessionDurationUnits {
  hour: string;
  minute: string;
}

// TODO: проверить отображение формата времени, когда сессия длится меньше часа
export const formatSessionDuration = (
  startedAt: number,
  now: number,
  { hour, minute }: SessionDurationUnits,
): string => {
  const totalMinutes = Math.max(0, Math.floor((now - startedAt) / 60_000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const minutesString = `${minutes}${minute}`;

  if (hours > 0) {
    return `${hours}${hour} ${minutesString}`;
  }

  return minutesString;
};
