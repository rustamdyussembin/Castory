import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui';

export default function ExploreScreen() {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={{ color: 'red' }}>{t('navigation.explore')}</Text>
    </View>
  );
}
