import { forwardRef } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';

import { colors } from '@/shared/theme';

import { Text } from '../text';
import type { ITextInputProps } from './text-input.interfaces';
import { styles } from './text-input.styles';

export const TextInput = forwardRef<RNTextInput, ITextInputProps>(
  ({ accessibilityHint, error, multiline, placeholderTextColor = colors.textSecondary, style, ...props }, ref) => {
    const errorMessage = error?.trim();
    const hasError = Boolean(errorMessage);
    const inputAccessibilityHint = [accessibilityHint, errorMessage].filter(Boolean).join('. ') || undefined;

    return (
      <View style={styles.container}>
        <RNTextInput
          {...props}
          ref={ref}
          accessibilityHint={inputAccessibilityHint}
          aria-invalid={hasError}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, multiline && styles.inputMultiline, hasError && styles.inputError, style]}
        />
        {hasError ? (
          <Text accessibilityLiveRegion="polite" accessibilityRole="alert" style={styles.error} variant="bodyXS">
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';
