import type { Coordinates } from '@/shared/lib/location';

import type { Weather } from '../model/weather.types';
import { mapWeatherResponse } from './map-weather-response';
import { parseWeatherResponse } from './parse-weather-response';
import { ECMWF_API_URL, WEATHER_API_FIELDS, WEATHER_API_FORECAST_HOURS } from './weather-api.constants';

export const getWeather = async (coordinates: Coordinates, signal?: AbortSignal): Promise<Weather> => {
  const params = new URLSearchParams({
    latitude: String(coordinates.latitude),
    longitude: String(coordinates.longitude),
    hourly: WEATHER_API_FIELDS.join(','),
    wind_speed_unit: 'ms',
    timezone: 'GMT',
    forecast_hours: String(WEATHER_API_FORECAST_HOURS),
  });
  const response = await fetch(`${ECMWF_API_URL}?${params}`, { signal });

  if (!response.ok) {
    throw new Error(`Open-Meteo request failed with status ${response.status}`);
  }

  return mapWeatherResponse(parseWeatherResponse(await response.json()));
};
