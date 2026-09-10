import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ExploreScreen() {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={{ color: 'red' }}>{t('navigation.explore')}</Text>
    </View>
  );
}
