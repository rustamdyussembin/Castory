import { View, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { IStartSession } from '../../start-session.types';
import { startSessionFormSchema } from './start-session-form.schema';
import { FC } from 'react';
import { IStartSessionFormProps } from './start-session-form.types';

export const StartSessionForm: FC<IStartSessionFormProps> = ({ onCancel, onSubmit }) => {
  const { control, handleSubmit } = useForm<IStartSession>({
    resolver: zodResolver(startSessionFormSchema),
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
            placeholder="Водоем"
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
            placeholder="Сектор"
            error={fieldState.error?.message}
            returnKeyType="next"
          />
        )}
      />

      <View style={styles.actions}>
        <Button onPress={onCancel}>Отмена</Button>
        <Button onPress={handleSubmit(onSubmit)}>Сохранить</Button>
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
