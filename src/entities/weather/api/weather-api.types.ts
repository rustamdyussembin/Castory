export interface WeatherApiSnapshot {
  temperature_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
}

export interface WeatherApiHourlyData {
  time: string[];
  temperature_2m: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  wind_gusts_10m: number[];
}

export interface WeatherApiResponse {
  hourly: WeatherApiHourlyData;
}
