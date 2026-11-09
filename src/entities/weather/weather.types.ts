import { WIND_DIRECTIONS } from './weather.constants';

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
}

export type WindDirection = (typeof WIND_DIRECTIONS)[number];
