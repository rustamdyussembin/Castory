import { type FC, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Menu } from 'react-native-paper';

import { usePreparationStore } from '@/entities/preparation-task';
import { useThemeColors } from '@/shared/theme';
import { IconButton } from '@/shared/ui';

import type { IRemovePreparationTaskMenuProps } from './remove-preparation-task-menu.types';

export const RemovePreparationTaskMenu: FC<IRemovePreparationTaskMenuProps> = ({ task }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const removeTask = usePreparationStore((state) => state.removeTask);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRemove = () => {
    setIsMenuOpen(false);
    removeTask(task.id);
  };

  return (
    <Menu
      visible={isMenuOpen}
      onDismiss={() => setIsMenuOpen(false)}
      anchor={
        <IconButton
          icon="dots-vertical"
          onPress={() => setIsMenuOpen(true)}
          accessibilityLabel={t('preparation.taskActions', { title: task.title })}
          style={styles.menuButton}
        />
      }
    >
      <Menu.Item
        leadingIcon="delete-outline"
        onPress={handleRemove}
        title={t('common.delete')}
        titleStyle={{ color: colors.error }}
      />
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    margin: 0,
  },
});
