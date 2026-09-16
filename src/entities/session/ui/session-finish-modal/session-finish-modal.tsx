import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, Text } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { spacing } from '@/shared/theme';
import { ISessionFinishModalProps } from './session-finish-modal.types';

export const SessionFinishModal: FC<ISessionFinishModalProps> = ({
  isConfirmationOpen,
  onSetIsConfirmationOpen,
  onConfirmFinish,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      visible={isConfirmationOpen}
      title={t('session.finishConfirmation.title')}
      onClose={() => onSetIsConfirmationOpen(false)}
    >
      <View style={styles.modalContent}>
        <Text variant="bodyS">{t('session.finishConfirmation.description')}</Text>
        <View style={styles.actions}>
          <Button mode="contained-tonal" onPress={() => onSetIsConfirmationOpen(false)} style={styles.action}>
            {t('common.cancel')}
          </Button>
          <Button onPress={onConfirmFinish} style={styles.action}>
            {t('session.finishConfirmation.confirm')}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    gap: spacing[4],
  },
  actions: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  action: {
    flex: 1,
  },
});
