import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { spacing, useThemeColors } from '@/shared/theme';
import { Checkbox } from '@/shared/ui';

import type { IPreparationTaskItemProps } from './preparation-task-item.types';

export const PreparationTaskItem: FC<IPreparationTaskItemProps> = ({ actions, onToggle, task }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();

  const toggleAccessibilityLabel = task.isCompleted
    ? t('preparation.markActive', { title: task.title })
    : t('preparation.markCompleted', { title: task.title });

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
      {actions}
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
  taskTitle: {
    textAlign: 'left',
  },
});
