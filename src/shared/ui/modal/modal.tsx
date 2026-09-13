import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Dialog, IconButton, Portal } from 'react-native-paper';

import { Text } from '../text';
import type { IModalProps } from './modal.types';
import { styles } from './modal.styles';

export const Modal = ({ children, onClose, title, visible }: IModalProps) => {
  const { t } = useTranslation();

  return (
    <Portal>
      <Dialog dismissable dismissableBackButton onDismiss={onClose} style={styles.dialog} visible={visible}>
        <View accessibilityViewIsModal style={styles.header}>
          {title !== undefined && title !== null ? <Text style={styles.title}>{title}</Text> : <View />}
          <IconButton
            accessibilityLabel={t('common.close')}
            icon={({ color, size }) => <Text style={{ color, fontSize: size, lineHeight: size }}>×</Text>}
            onPress={onClose}
          />
        </View>
        <Dialog.Content style={styles.content}>{children}</Dialog.Content>
      </Dialog>
    </Portal>
  );
};
