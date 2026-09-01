import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

import { getCurrentCoordinates } from '@/shared/lib/location';

import { getWeather } from '../api/get-weather';
import { WEATHER_STALE_TIME } from './weather.constants';
import type { UseWeatherResult, Weather } from './weather.types';

export const useWeather = (): UseWeatherResult => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const updatedAtRef = useRef<Date | null>(null);
  const mountedRef = useRef(true);
  const requestIdRef = useRef(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  const refetch = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    abortControllerRef.current?.abort();
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setIsFetching(true);
    setError(null);

    try {
      const coordinates = await getCurrentCoordinates();
      if (!mountedRef.current || requestId !== requestIdRef.current) return;

      const nextWeather = await getWeather(coordinates, abortController.signal);
      if (!mountedRef.current || requestId !== requestIdRef.current) return;

      const nextUpdatedAt = new Date();
      updatedAtRef.current = nextUpdatedAt;
      setWeather(nextWeather);
      setUpdatedAt(nextUpdatedAt);
    } catch (caughtError: unknown) {
      if (!mountedRef.current || requestId !== requestIdRef.current || abortController.signal.aborted) return;
      setError(caughtError instanceof Error ? caughtError : new Error('Weather update failed'));
    } finally {
      if (mountedRef.current && requestId === requestIdRef.current) setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    void refetch();

    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState !== 'active') return;

      const lastUpdate = updatedAtRef.current;
      if (!lastUpdate || Date.now() - lastUpdate.getTime() > WEATHER_STALE_TIME) {
        void refetch();
      }
    });

    return () => {
      mountedRef.current = false;
      requestIdRef.current += 1;
      abortControllerRef.current?.abort();
      subscription.remove();
    };
  }, [refetch]);

  return {
    weather,
    isLoading: isFetching && weather === null,
    isRefreshing: isFetching && weather !== null,
    error,
    updatedAt,
    refetch,
  };
};
