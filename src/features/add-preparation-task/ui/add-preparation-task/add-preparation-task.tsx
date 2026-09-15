import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { usePreparationStore } from '@/entities/preparation-task';
import { spacing } from '@/shared/theme';
import { Button, TextInput } from '@/shared/ui';

import {
  type AddPreparationTaskData,
  type AddPreparationTaskInput,
  createAddPreparationTaskSchema,
  MAX_PREPARATION_TASK_TITLE_LENGTH,
} from './add-preparation-task.schema';

export const AddPreparationTask = () => {
  const { t } = useTranslation();
  const addTask = usePreparationStore((state) => state.addTask);
  const schema = useMemo(() => createAddPreparationTaskSchema(t), [t]);
  const { control, handleSubmit, reset } = useForm<AddPreparationTaskInput, unknown, AddPreparationTaskData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
    },
  });
  const title = useWatch({ control, name: 'title' });

  const submitTask = handleSubmit(({ title: taskTitle }) => {
    addTask(taskTitle);
    reset({ title: '' });
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <TextInput
              ref={field.ref}
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              onSubmitEditing={() => void submitTask()}
              placeholder={t('preparation.taskPlaceholder')}
              accessibilityLabel={t('preparation.taskPlaceholder')}
              error={fieldState.error?.message}
              maxLength={MAX_PREPARATION_TASK_TITLE_LENGTH}
              returnKeyType="done"
            />
          )}
        />
      </View>
      <Button disabled={!title.trim()} onPress={() => void submitTask()}>
        {t('preparation.addTask')}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing[3],
  },
  inputContainer: {
    flex: 1,
  },
});
