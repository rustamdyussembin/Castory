import { StyleSheet, View } from 'react-native';

import { roundToString } from '@/shared/lib/formatters';
import { Text } from '@/shared/ui';

import { useWeather } from '../model/use-weather';
import { getWindDirection } from '../lib/weather.helpers';

export const WeatherSummary = () => {
  const { weather, isLoading } = useWeather();

  if (isLoading) {
    return <Text variant="bodyS">Загрузка погоды...</Text>;
  }

  if (!weather) {
    return <Text variant="bodyS">Погода недоступна</Text>;
  }

  return (
    <View style={styles.container}>
      <Text variant="bodyS">{roundToString(weather.current.temperature)}°C</Text>
      <Text variant="bodyS">
        {getWindDirection(weather.current.windDirection)} {roundToString(weather.current.windSpeed)} м/с
      </Text>
      <Text variant="bodyS">
        Через час: {getWindDirection(weather.inOneHour.windDirection)} {roundToString(weather.inOneHour.windSpeed)} м/с
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
