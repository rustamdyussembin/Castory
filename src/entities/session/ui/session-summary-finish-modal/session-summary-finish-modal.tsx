import { FC } from 'react';
import { Button, Modal, Text } from '@/shared/ui';
import { StyleSheet, View } from 'react-native';
import { ISessionSummaryFinishModalProps } from './session-summary-finish-modal.types';
import { useTranslation } from 'react-i18next';
import { spacing } from '@/shared/theme';
import { formatSessionDuration } from '../../lib/format-session-duration';
import { formatWeightSessionSummaryFinish } from '../../lib/format-weight-session-summary-finish';

export const SessionSummaryFinishModal: FC<ISessionSummaryFinishModalProps> = ({
  completedSession,
  completedStats,
  onSetCompletedSession,
}) => {
  const { t } = useTranslation();

  const completedDuration = completedSession
    ? formatSessionDuration(completedSession.startedAt, completedSession.finishedAt, {
        hour: t('session.duration.hour'),
        includeZeroHours: true,
        minute: t('session.duration.minute'),
      })
    : '';

  return (
    <Modal
      visible={completedSession !== null}
      title={t('session.summary.title')}
      onClose={() => onSetCompletedSession(null)}
    >
      {completedSession && completedStats ? (
        <View style={styles.modalContent}>
          <Text variant="bodyS">{t('session.summary.venue', { venue: completedSession.result.venue })}</Text>
          <Text variant="bodyS">{t('session.summary.duration', { duration: completedDuration })}</Text>
          <Text variant="bodyS">
            {t('session.summary.bestBait', { bait: completedStats.bestBait ?? t('common.noData') })}
          </Text>
          <Text variant="bodyS">{t('session.summary.fishCount', { count: completedStats.fishCount })}</Text>
          <Text variant="bodyS">
            {t('session.summary.maxWeight', {
              weight:
                completedStats.maxWeight === null
                  ? t('common.noData')
                  : t('session.summary.weightValue', {
                      weight: formatWeightSessionSummaryFinish(completedStats.maxWeight),
                    }),
            })}
          </Text>
          <Text variant="bodyS">
            {t('session.summary.averageWeight', {
              weight:
                completedStats.averageWeight === null
                  ? t('common.noData')
                  : t('session.summary.weightValue', {
                      weight: formatWeightSessionSummaryFinish(completedStats.averageWeight),
                    }),
            })}
          </Text>
          <Button onPress={() => onSetCompletedSession(null)}>{t('common.close')}</Button>
        </View>
      ) : null}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    gap: spacing[4],
  },
});
