import type { IWeatherSnapshot } from '../weather.types';
import type { IWeatherApiSnapshot } from './weather.dto';

export const toWeatherSnapshot = (snapshot: IWeatherApiSnapshot): IWeatherSnapshot => ({
  temperature: snapshot.temperature_2m,
  windSpeed: snapshot.wind_speed_10m,
  windDirection: snapshot.wind_direction_10m,
  windGusts: snapshot.wind_gusts_10m,
});
