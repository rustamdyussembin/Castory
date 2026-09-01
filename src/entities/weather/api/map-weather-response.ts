import { getClosestTimeIndex } from '../lib/get-closest-time-index';
import { WEATHER_FORECAST_OFFSET } from '../model/weather.constants';
import type { Weather, WeatherSnapshot } from '../model/weather.types';
import { getHourlySnapshot } from './get-hourly-snapshot';
import type { WeatherApiResponse, WeatherApiSnapshot } from './weather-api.types';

const toWeatherSnapshot = (snapshot: WeatherApiSnapshot): WeatherSnapshot => ({
  temperature: snapshot.temperature_2m,
  windSpeed: snapshot.wind_speed_10m,
  windDirection: snapshot.wind_direction_10m,
  windGusts: snapshot.wind_gusts_10m,
});

export const mapWeatherResponse = (data: WeatherApiResponse): Weather => {
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
