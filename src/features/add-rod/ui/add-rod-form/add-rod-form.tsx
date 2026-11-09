import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useMemo } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import type { IRodInput } from '@/entities/rod';
import { spacing } from '@/shared/theme';
import { Button, type ISelectOption, Select, Text, TextInput } from '@/shared/ui';

import { createAddRodFormSchema, type AddRodFormInput } from './add-rod-form.schema';
import type { IAddRodFormProps } from './add-rod-form.types';
import { calculateDistance } from '@/shared/lib/distance';
import { parsePositiveDecimal } from '@/shared/lib/number';
import { DISTANCE_OPTIONS } from '@/shared/config';

export const AddRodForm: FC<IAddRodFormProps> = ({ initialValues, onCancel, onSubmit }) => {
  const { t } = useTranslation();
  const distanceOptions: ISelectOption<(typeof DISTANCE_OPTIONS)[number]>[] = DISTANCE_OPTIONS.map((value) => ({
    label: t('rod.form.pegDistanceValue', { distance: value }),
    value,
  }));
  const schema = useMemo(() => createAddRodFormSchema(t), [t]);
  const { control, handleSubmit } = useForm<AddRodFormInput, unknown, IRodInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      bait: initialValues?.bait ?? '',
      wraps: initialValues?.wraps === undefined ? '' : String(initialValues.wraps),
      pegDistance: initialValues ? (String(initialValues.pegDistance) as (typeof DISTANCE_OPTIONS)[number]) : '3',
    },
  });
  const [wraps, pegDistance] = useWatch({ control, name: ['wraps', 'pegDistance'] });
  const distance = calculateDistance(parsePositiveDecimal(wraps), Number(pegDistance));

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="bait"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('rod.form.bait')}
            error={fieldState.error?.message}
            returnKeyType="next"
          />
        )}
      />

      <Controller
        control={control}
        name="wraps"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('rod.form.wraps')}
            error={fieldState.error?.message}
            inputMode="decimal"
            keyboardType="decimal-pad"
            returnKeyType="done"
          />
        )}
      />

      <Controller
        control={control}
        name="pegDistance"
        render={({ field }) => (
          <Select
            label={t('rod.form.pegDistance')}
            options={distanceOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {distance !== undefined ? <Text>{t('rod.form.distance', { distance })}</Text> : null}

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
