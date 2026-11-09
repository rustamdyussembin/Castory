import { useQuery, queryOptions } from '@tanstack/react-query';

import type { IUseWeather } from '../weather.types';

import { getCurrentCoordinates } from '@/shared/lib/location';
import { getWeather } from '../api/get-weather';
import { WEATHER_STALE_TIME } from '../weather.constants';

const weatherQueryOptions = queryOptions({
  queryKey: ['weather', 'current'],
  queryFn: async ({ signal }) => {
    const coordinates = await getCurrentCoordinates();

    return getWeather(coordinates, signal);
  },
  staleTime: WEATHER_STALE_TIME,
});

export const useWeather = (): IUseWeather => {
  const query = useQuery(weatherQueryOptions);

  return {
    weather: query.data ?? null,
    isLoading: query.isPending,
  };
};
