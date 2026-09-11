import { useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { spacing } from '@/shared/theme';
import { Text } from '@/shared/ui';

import { formatSessionDuration } from '../../lib/format-session-duration';
import { useSessionStore } from '../../model/session.store';

const UPDATE_INTERVAL_MS = 60_000;

export const SessionSummary = () => {
  const { t } = useTranslation();
  const activeSession = useSessionStore((state) => state.activeSession);
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const intervalId = setInterval(() => setNow(Date.now()), UPDATE_INTERVAL_MS);
    const subscription = AppState.addEventListener('change', (status) => {
      if (status === 'active') setNow(Date.now());
    });

    return () => {
      clearInterval(intervalId);
      subscription.remove();
    };
  }, []);

  if (!activeSession) return null;

  const duration = formatSessionDuration(activeSession.startedAt, now, {
    hour: t('session.duration.hour'),
    minute: t('session.duration.minute'),
  });

  return (
    <View style={styles.container}>
      <Text variant="bodyS">{activeSession.venue}</Text>
      {activeSession.sector ? (
        <Text variant="bodyS">{t('session.sectorValue', { sector: activeSession.sector })}</Text>
      ) : null}
      <Text variant="bodyS">{t('session.runningFor', { duration })}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    justifyContent: 'space-between',
  },
});
