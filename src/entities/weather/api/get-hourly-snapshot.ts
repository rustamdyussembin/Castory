import { isRecord } from '@/shared/lib/type-guard';

import { WEATHER_API_FIELDS } from './weather-api.constants';
import type { WeatherApiHourlyData, WeatherApiSnapshot } from './weather-api.types';

const isWeatherApiSnapshot = (value: unknown): value is WeatherApiSnapshot =>
  isRecord(value) && WEATHER_API_FIELDS.every((field) => typeof value[field] === 'number');

export const getHourlySnapshot = (hourly: WeatherApiHourlyData, index: number): WeatherApiSnapshot => {
  const snapshot = {
    temperature_2m: hourly.temperature_2m[index],
    wind_speed_10m: hourly.wind_speed_10m[index],
    wind_direction_10m: hourly.wind_direction_10m[index],
    wind_gusts_10m: hourly.wind_gusts_10m[index],
  };

  if (!isWeatherApiSnapshot(snapshot)) {
    throw new Error('Open-Meteo returned incomplete hourly weather data');
  }

  return snapshot;
};
