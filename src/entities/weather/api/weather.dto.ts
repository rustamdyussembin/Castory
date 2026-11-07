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
