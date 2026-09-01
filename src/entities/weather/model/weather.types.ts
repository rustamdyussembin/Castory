export interface WeatherSnapshot {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  windGusts: number;
}

export interface Weather {
  current: WeatherSnapshot;
  inOneHour: WeatherSnapshot;
}

export interface UseWeatherResult {
  weather: Weather | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: Error | null;
  updatedAt: Date | null;
  refetch: () => Promise<void>;
}
