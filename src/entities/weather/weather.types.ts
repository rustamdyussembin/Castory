import { WIND_DIRECTIONS } from './weather.constants';

export interface IWeatherApiSnapshot {
  temperature_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
}

export interface IWeatherHourlyData {
  time: string[];
  temperature_2m: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  wind_gusts_10m: number[];
}

export interface IMapWeatherResponse {
  hourly: IWeatherHourlyData;
}

export interface IWeatherSnapshot {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  windGusts: number;
}

export interface IWeather {
  current: IWeatherSnapshot;
  inOneHour: IWeatherSnapshot;
}

export interface IUseWeather {
  weather: IWeather | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: Error | null;
  updatedAt: Date | null;
  refetch: () => Promise<void>;
}

export type WindDirection = (typeof WIND_DIRECTIONS)[number];
