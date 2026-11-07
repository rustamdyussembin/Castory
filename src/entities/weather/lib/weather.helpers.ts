import { FULL_CIRCLE_DEGREES, WIND_DIRECTIONS } from '../weather.constants';
import type { WindDirection } from '../weather.types';

export const getWindDirection = (degrees: number): WindDirection => {
  const normalizedDegrees = ((degrees % FULL_CIRCLE_DEGREES) + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
  const sectorSize = FULL_CIRCLE_DEGREES / WIND_DIRECTIONS.length;
  const index = Math.round(normalizedDegrees / sectorSize) % WIND_DIRECTIONS.length;

  return WIND_DIRECTIONS[index];
};
