export const ECMWF_API_URL = 'https://api.open-meteo.com/v1/ecmwf';
export const WEATHER_API_FIELDS = ['temperature_2m', 'wind_speed_10m', 'wind_direction_10m', 'wind_gusts_10m'] as const;
export const WEATHER_API_FORECAST_HOURS = 2;

export const WEATHER_STALE_TIME = 15 * 60 * 1000;
export const WEATHER_FORECAST_OFFSET = 60 * 60 * 1000;

export const WIND_DIRECTIONS = ['↑ С', '↗ СВ', '→ В', '↘ ЮВ', '↓ Ю', '↙ ЮЗ', '← З', '↖ СЗ'] as const;
export const FULL_CIRCLE_DEGREES = 360;
