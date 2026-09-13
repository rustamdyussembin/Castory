import { type ComponentRef, forwardRef } from 'react';
import { TextInput as NativeTextInput, View } from 'react-native';
import { HelperText, TextInput as PaperTextInput } from 'react-native-paper';

import type { ITextInputProps } from './text-input.types';
import { styles } from './text-input.styles';

type TextInputRef = ComponentRef<typeof NativeTextInput> & ComponentRef<typeof PaperTextInput>;

export const TextInput = forwardRef<TextInputRef, ITextInputProps>(
  ({ accessibilityHint, error, multiline, style, ...props }, ref) => {
    const errorMessage = error?.trim();
    const hasError = Boolean(errorMessage);
    const inputAccessibilityHint = [accessibilityHint, errorMessage].filter(Boolean).join('. ') || undefined;

    return (
      <View style={styles.container}>
        <PaperTextInput
          {...props}
          ref={ref}
          accessibilityHint={inputAccessibilityHint}
          dense
          error={hasError}
          mode="outlined"
          multiline={multiline}
          style={[multiline && styles.inputMultiline, style]}
        />
        {hasError ? (
          <HelperText accessibilityLiveRegion="polite" padding="none" type="error" visible>
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';
