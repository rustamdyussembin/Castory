const WIND_DIRECTIONS = ['↑ С', '↗ СВ', '→ В', '↘ ЮВ', '↓ Ю', '↙ ЮЗ', '← З', '↖ СЗ'] as const;
const FULL_CIRCLE_DEGREES = 360;

export type WindDirection = (typeof WIND_DIRECTIONS)[number];

export const getWindDirection = (degrees: number): WindDirection => {
  const normalizedDegrees = ((degrees % FULL_CIRCLE_DEGREES) + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
  const sectorSize = FULL_CIRCLE_DEGREES / WIND_DIRECTIONS.length;
  const index = Math.round(normalizedDegrees / sectorSize) % WIND_DIRECTIONS.length;

  return WIND_DIRECTIONS[index];
};
