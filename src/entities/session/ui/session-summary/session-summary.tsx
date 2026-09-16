import { type FC, useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { spacing } from '@/shared/theme';
import { Button, Text } from '@/shared/ui';

import { formatSessionDuration } from '../../lib/format-session-duration';
import { useSessionStore } from '../../model/session.store';
import type { ISessionSummaryProps } from './session-summary.types';
import { SESSION_SUMMARY_UPDATE_INTERVAL_MS } from '../../session.constants';

export const SessionSummary: FC<ISessionSummaryProps> = ({ onFinish }) => {
  const { t } = useTranslation();
  const activeSession = useSessionStore((state) => state.activeSession);
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const intervalId = setInterval(() => setNow(Date.now()), SESSION_SUMMARY_UPDATE_INTERVAL_MS);
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
      <Button onPress={onFinish} mode="text">
        {t('session.finish')}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
