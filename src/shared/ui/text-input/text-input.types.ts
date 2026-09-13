import type { TextInputProps as PaperTextInputProps } from 'react-native-paper';

export interface ITextInputProps extends Omit<PaperTextInputProps, 'error' | 'ref'> {
  error?: string;
}
