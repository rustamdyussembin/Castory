import { useMemo } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  getSortedPreparationTasks,
  type PreparationTask,
  PreparationTaskItem,
  usePreparationStore,
} from '@/entities/preparation-task';
import { AddPreparationTask } from '@/features/add-preparation-task';
import { spacing } from '@/shared/theme';
import { Text } from '@/shared/ui';

interface PreparationSection {
  data: PreparationTask[];
  title?: string;
}

const TaskSeparator = () => <View style={styles.separator} />;

export const PreparationScreen = () => {
  const { t } = useTranslation();
  const tasks = usePreparationStore((state) => state.tasks);
  const toggleTask = usePreparationStore((state) => state.toggleTask);
  const removeTask = usePreparationStore((state) => state.removeTask);
  const { activeTasks, completedTasks } = useMemo(() => getSortedPreparationTasks(tasks), [tasks]);
  const sections: PreparationSection[] = [
    { data: activeTasks },
    ...(completedTasks.length > 0 ? [{ data: completedTasks, title: t('preparation.completed') }] : []),
  ];

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        {t('preparation.title')}
      </Text>
      <AddPreparationTask />

      <SectionList<PreparationTask, PreparationSection>
        sections={sections}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <PreparationTaskItem task={item} onToggle={() => toggleTask(item.id)} onRemove={() => removeTask(item.id)} />
        )}
        renderSectionHeader={({ section }) =>
          section.title ? <Text style={styles.sectionTitle}>{section.title}</Text> : null
        }
        ItemSeparatorComponent={TaskSeparator}
        ListEmptyComponent={<Text style={styles.empty}>{t('preparation.empty')}</Text>}
        contentContainerStyle={[styles.listContent, tasks.length === 0 && styles.emptyListContent]}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing[4],
    paddingTop: spacing[4],
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: spacing[6],
  },
  emptyListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  empty: {
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: '600',
    paddingBottom: spacing[3],
    paddingTop: spacing[5],
  },
  separator: {
    height: spacing[3],
  },
});
