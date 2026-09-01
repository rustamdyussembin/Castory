import { StyleSheet, View } from 'react-native';

import { Text } from '@/shared/ui';

import { getWindDirection } from '../lib/get-wind-direction';
import { useWeather } from '../model/use-weather';
import { roundToString } from '@/shared/lib/formatters';

export const WeatherSummary = () => {
  const { weather, isLoading, error } = useWeather();

  if (isLoading) {
    return <Text variant="bodyS">Загрузка погоды...</Text>;
  }

  if (!weather || error) {
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
