import { isNumberArray, isRecord, isStringArray } from '@/shared/lib/type-guard';

import type { WeatherApiResponse } from './weather-api.types';

export const parseWeatherResponse = (value: unknown): WeatherApiResponse => {
  if (!isRecord(value) || !isRecord(value.hourly)) {
    throw new Error('Open-Meteo returned an invalid response');
  }

  const { hourly } = value;
  if (
    !isStringArray(hourly.time) ||
    !isNumberArray(hourly.temperature_2m) ||
    !isNumberArray(hourly.wind_speed_10m) ||
    !isNumberArray(hourly.wind_direction_10m) ||
    !isNumberArray(hourly.wind_gusts_10m)
  ) {
    throw new Error('Open-Meteo returned incomplete weather data');
  }

  return {
    hourly: {
      time: hourly.time,
      temperature_2m: hourly.temperature_2m,
      wind_speed_10m: hourly.wind_speed_10m,
      wind_direction_10m: hourly.wind_direction_10m,
      wind_gusts_10m: hourly.wind_gusts_10m,
    },
  };
};
