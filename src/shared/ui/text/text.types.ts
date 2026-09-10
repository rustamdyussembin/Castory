import { TextProps } from 'react-native';

export type TextVariant = 'bodyM' | 'bodyS' | 'bodyXS';

export interface ITextProps extends TextProps {
  variant?: TextVariant;
}
