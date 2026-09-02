import type { Coordinates } from '@/shared/lib/location';

import type { IWeather } from '../weather.types';
import { ECMWF_API_URL, WEATHER_API_FIELDS, WEATHER_API_FORECAST_HOURS } from '../weather.constants';
import { mapWeather } from '../lib/weather.helpers';

export const getWeather = async (coordinates: Coordinates, signal?: AbortSignal): Promise<IWeather> => {
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

  return mapWeather(await response.json());
};
