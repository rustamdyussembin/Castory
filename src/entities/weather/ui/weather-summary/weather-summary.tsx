import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { roundToString } from '@/shared/lib/formatters';
import { Text } from '@/shared/ui';

import { getWindDirection } from '../../lib/weather.helpers';
import { useWeather } from '../../model/use-weather';
import { WIND_DIRECTION_ARROWS } from '../../weather.constants';

export const WeatherSummary = () => {
  const { t } = useTranslation();
  const { weather, isLoading } = useWeather();

  if (isLoading) {
    return <Text variant="bodyS">{t('weather.loading')}</Text>;
  }

  if (!weather) {
    return <Text variant="bodyS">{t('weather.unavailable')}</Text>;
  }

  const currentDirection = getWindDirection(weather.current.windDirection);
  const forecastDirection = getWindDirection(weather.inOneHour.windDirection);
  const localizedCurrentDirection = `${WIND_DIRECTION_ARROWS[currentDirection]} ${t(
    `weather.windDirection.${currentDirection}`,
  )}`;
  const localizedForecastDirection = `${WIND_DIRECTION_ARROWS[forecastDirection]} ${t(
    `weather.windDirection.${forecastDirection}`,
  )}`;

  return (
    <View style={styles.container}>
      <Text variant="bodyS">{roundToString(weather.current.temperature)}°C</Text>
      <Text variant="bodyS">
        {t('weather.wind', {
          direction: localizedCurrentDirection,
          speed: roundToString(weather.current.windSpeed),
        })}
      </Text>
      <Text variant="bodyS">
        {t('weather.windInHours', {
          count: 1,
          direction: localizedForecastDirection,
          speed: roundToString(weather.inOneHour.windSpeed),
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 4,
  },
});
