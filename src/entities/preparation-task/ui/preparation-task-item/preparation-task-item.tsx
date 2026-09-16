import { type FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Checkbox, IconButton, Menu } from 'react-native-paper';

import { spacing, useThemeColors } from '@/shared/theme';

import type { IPreparationTaskItemProps } from './preparation-task-item.types';

export const PreparationTaskItem: FC<IPreparationTaskItemProps> = ({ onRemove, onToggle, task }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAccessibilityLabel = task.isCompleted
    ? t('preparation.markActive', { title: task.title })
    : t('preparation.markCompleted', { title: task.title });

  const handleRemove = () => {
    setIsMenuOpen(false);
    onRemove();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundElement },
        task.isCompleted && styles.completedContainer,
      ]}
    >
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label={task.title}
          status={task.isCompleted ? 'checked' : 'unchecked'}
          onPress={onToggle}
          color={colors.primary}
          uncheckedColor={colors.textSecondary}
          accessibilityLabel={toggleAccessibilityLabel}
          mode="android"
          position="leading"
          labelStyle={[styles.taskTitle, task.isCompleted && styles.completedTitle]}
        />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    minHeight: 56,
    paddingHorizontal: spacing[2],
  },
  completedContainer: {
    opacity: 0.65,
  },
  checkboxContainer: {
    flex: 1,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
  },
  menuButton: {
    margin: 0,
  },
  taskTitle: {
    textAlign: 'left',
  },
});
