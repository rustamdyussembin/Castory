import { Modal as ReactNativeModal, Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Text } from '../text';
import type { IModalProps } from './modal.types';
import { styles } from './modal.styles';

export const Modal = ({ children, onClose, title, visible }: IModalProps) => {
  const { t } = useTranslation();

  return (
    <ReactNativeModal animationType="fade" onRequestClose={onClose} statusBarTranslucent transparent visible={visible}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable accessibilityViewIsModal style={styles.content} onPress={(event) => event.stopPropagation()}>
          <View style={styles.header}>
            {title !== undefined && title !== null ? (
              <Text style={styles.title}>{title}</Text>
            ) : (
              <View style={styles.title} />
            )}
            <Pressable
              accessibilityLabel={t('common.close')}
              accessibilityRole="button"
              hitSlop={8}
              onPress={onClose}
              style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}
            >
              <Text style={styles.closeIcon}>×</Text>
            </Pressable>
          </View>
          {children}
        </Pressable>
      </Pressable>
    </ReactNativeModal>
  );
};
