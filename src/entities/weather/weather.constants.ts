export const WEATHER_STALE_TIME = 15 * 60 * 1000;

export const WIND_DIRECTIONS = [
  'north',
  'northEast',
  'east',
  'southEast',
  'south',
  'southWest',
  'west',
  'northWest',
] as const;

export const WIND_DIRECTION_ARROWS = {
  north: '↑',
  northEast: '↗',
  east: '→',
  southEast: '↘',
  south: '↓',
  southWest: '↙',
  west: '←',
  northWest: '↖',
} as const;
export const FULL_CIRCLE_DEGREES = 360;
