import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { Button, TextInput } from '@/shared/ui';

import type { IStartSession } from '../../start-session.types';
import { createStartSessionFormSchema } from './start-session-form.schema';
import type { IStartSessionFormProps } from './start-session-form.types';

export const StartSessionForm: FC<IStartSessionFormProps> = ({ onCancel, onSubmit }) => {
  const { t } = useTranslation();
  const schema = useMemo(() => createStartSessionFormSchema(t), [t]);
  const { control, handleSubmit } = useForm<IStartSession>({
    resolver: zodResolver(schema),
    defaultValues: {
      sector: '',
      venue: '',
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="venue"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('session.form.venue')}
            error={fieldState.error?.message}
            returnKeyType="next"
          />
        )}
      />

      <Controller
        control={control}
        name="sector"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('session.form.sector')}
            error={fieldState.error?.message}
            returnKeyType="next"
          />
        )}
      />

      <View style={styles.actions}>
        <Button onPress={onCancel} variant="secondary">
          {t('common.cancel')}
        </Button>
        <Button onPress={handleSubmit(onSubmit)}>{t('common.save')}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
});
