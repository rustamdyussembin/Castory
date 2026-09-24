import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';
import { Menu, TextInput as PaperTextInput } from 'react-native-paper';

import type { SpodFormData } from '@/entities/spod';
import { PEG_DISTANCE_OPTIONS } from '@/shared/lib/peg-distance';
import { spacing } from '@/shared/theme';
import { Button, Text, TextInput } from '@/shared/ui';

import { calculateSpodFormDistance } from '../../lib/calculate-spod-form-distance';
import { createAddSpodFormSchema, type AddSpodFormInput } from './add-spod-form.schema';
import type { IAddSpodFormProps } from './add-spod-form.types';

const MENU_ITEM_HEIGHT = 48;
const DISTANCE_MENU_HEIGHT = PEG_DISTANCE_OPTIONS.length * MENU_ITEM_HEIGHT + spacing[3] * 2;

export const AddSpodForm: FC<IAddSpodFormProps> = ({ initialValues, onCancel, onSubmit }) => {
  const { t } = useTranslation();
  const [isDistanceMenuOpen, setIsDistanceMenuOpen] = useState(false);
  const schema = useMemo(() => createAddSpodFormSchema(t), [t]);
  const { control, handleSubmit } = useForm<AddSpodFormInput, unknown, SpodFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      wraps: initialValues ? String(initialValues.wraps) : '',
      pegDistance: initialValues ? (String(initialValues.pegDistance) as (typeof PEG_DISTANCE_OPTIONS)[number]) : '3',
    },
  });
  const [wraps, pegDistance] = useWatch({ control, name: ['wraps', 'pegDistance'] });
  const distance = calculateSpodFormDistance(wraps, pegDistance);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="wraps"
        render={({ field, fieldState }) => (
          <TextInput
            ref={field.ref}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t('spod.form.wraps')}
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
          <Menu
            visible={isDistanceMenuOpen}
            onDismiss={() => setIsDistanceMenuOpen(false)}
            anchorPosition="top"
            style={styles.distanceMenu}
            anchor={
              <Pressable
                accessibilityLabel={t('spod.form.pegDistance')}
                accessibilityRole="button"
                onPress={() => setIsDistanceMenuOpen(true)}
              >
                <View pointerEvents="none">
                  <TextInput
                    editable={false}
                    label={t('spod.form.pegDistance')}
                    value={t('spod.form.pegDistanceValue', { distance: field.value })}
                    right={<PaperTextInput.Icon icon={isDistanceMenuOpen ? 'menu-up' : 'menu-down'} />}
                  />
                </View>
              </Pressable>
            }
          >
            {PEG_DISTANCE_OPTIONS.map((value) => (
              <Menu.Item
                key={value}
                onPress={() => {
                  field.onChange(value);
                  setIsDistanceMenuOpen(false);
                }}
                title={t('spod.form.pegDistanceValue', { distance: value })}
              />
            ))}
          </Menu>
        )}
      />

      {distance !== undefined ? <Text>{t('spod.form.distance', { distance })}</Text> : null}

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
  distanceMenu: {
    transform: [{ translateY: -DISTANCE_MENU_HEIGHT }],
  },
});
