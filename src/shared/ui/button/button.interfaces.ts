import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import type { ButtonProps as PaperButtonProps } from 'react-native-paper';

export type TButtonVariant = 'primary' | 'secondary';

export interface IButtonProps extends Omit<PaperButtonProps, 'children' | 'labelStyle' | 'mode'> {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  variant?: TButtonVariant;
}
