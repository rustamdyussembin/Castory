import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { spacing } from '@/shared/theme';
import { Button, TextInput } from '@/shared/ui';

import type { FishBiteData } from '../../fish-bite.types';
import { createFishBiteFormSchema, type FishBiteFormInput } from './fish-bite-form.schema';
import type { IFishBiteFormProps } from './fish-bite-form.types';

export const FishBiteForm: FC<IFishBiteFormProps> = ({ onCancel, onSubmit }) => {
  const { t } = useTranslation();
  const schema = useMemo(() => createFishBiteFormSchema(t), [t]);
  const { control, handleSubmit } = useForm<FishBiteFormInput, unknown, FishBiteData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fish: '',
      weight: '',
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="fish"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('fishBite.form.fish')}
            error={fieldState.error?.message}
            returnKeyType="next"
          />
        )}
      />

      <Controller
        control={control}
        name="weight"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('fishBite.form.weight')}
            error={fieldState.error?.message}
            inputMode="decimal"
            keyboardType="decimal-pad"
            returnKeyType="done"
          />
        )}
      />

      <View style={styles.actions}>
        <Button onPress={onCancel} mode="contained-tonal" style={styles.action}>
          {t('common.cancel')}
        </Button>
        <Button onPress={handleSubmit(onSubmit)} style={styles.action}>
          {t('common.save')}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
  actions: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  action: {
    flex: 1,
  },
});
