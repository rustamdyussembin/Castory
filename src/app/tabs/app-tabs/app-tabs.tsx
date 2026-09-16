import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useTranslation } from 'react-i18next';

import { useThemeColors } from '@/shared/theme';

export default function AppTabs() {
  const { t } = useTranslation();
  const colors = useThemeColors();

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>{t('navigation.session')}</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon sf="water.waves" md="waves" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="preparation">
        <NativeTabs.Trigger.Label>{t('navigation.preparation')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet.clipboard" md="assignment" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
