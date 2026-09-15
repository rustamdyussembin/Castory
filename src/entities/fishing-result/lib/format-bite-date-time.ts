const pad = (value: number): string => String(value).padStart(2, '0');

export const formatBiteDateTime = (timestamp: number): { date: string; time: string } => {
  const value = new Date(timestamp);

  return {
    date: `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`,
    time: `${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`,
  };
};
