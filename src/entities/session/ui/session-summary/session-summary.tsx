import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useNow } from '@/shared/lib/use-now';
import { spacing } from '@/shared/theme';
import { Text } from '@/shared/ui';

import { formatSessionDuration } from '../../lib/format-session-duration';
import { useSessionStore } from '../../model/session.store';
import type { ISessionSummaryProps } from './session-summary.types';
import { SESSION_SUMMARY_UPDATE_INTERVAL_MS } from '../../session.constants';

export const SessionSummary: FC<ISessionSummaryProps> = ({ actions }) => {
  const { t } = useTranslation();
  const activeSession = useSessionStore((state) => state.activeSession);
  const now = useNow(SESSION_SUMMARY_UPDATE_INTERVAL_MS);

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
      {actions}
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
