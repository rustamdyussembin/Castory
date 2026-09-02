import { isNumberArray, isRecord, isStringArray } from '@/shared/lib/type-guard';

import { IMapWeather, IWeather, IWeatherApiSnapshot, IWeatherHourlyData, WindDirection } from './weather.types';
import { FULL_CIRCLE_DEGREES, WEATHER_API_FIELDS, WEATHER_FORECAST_OFFSET, WIND_DIRECTIONS } from './weather.constants';
import { toWeatherSnapshot } from './weather.translators';

const isWeatherApiSnapshot = (value: unknown): value is IMapWeather =>
  isRecord(value) && WEATHER_API_FIELDS.every((field) => typeof value[field] === 'number');

export const getHourlySnapshot = (hourly: IWeatherHourlyData, index: number): IWeatherApiSnapshot => {
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

export const getWindDirection = (degrees: number): WindDirection => {
  const normalizedDegrees = ((degrees % FULL_CIRCLE_DEGREES) + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
  const sectorSize = FULL_CIRCLE_DEGREES / WIND_DIRECTIONS.length;
  const index = Math.round(normalizedDegrees / sectorSize) % WIND_DIRECTIONS.length;

  return WIND_DIRECTIONS[index];
};

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

export const mapWeather = (value: unknown): IWeather => {
  const data = parseWeather(value);

  const currentTime = data.hourly.time[0];

  if (!currentTime) {
    throw new Error('Open-Meteo did not return current hourly weather data');
  }

  const targetTime = Date.parse(`${currentTime}Z`) + WEATHER_FORECAST_OFFSET;
  const forecastIndex = getClosestTimeIndex(data.hourly.time, targetTime);

  return {
    current: toWeatherSnapshot(getHourlySnapshot(data.hourly, 0)),
    inOneHour: toWeatherSnapshot(getHourlySnapshot(data.hourly, forecastIndex)),
  };
};

const parseWeather = (value: unknown): IMapWeather => {
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
