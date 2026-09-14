import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import type { ButtonProps as PaperButtonProps } from 'react-native-paper';

export interface IButtonProps extends Omit<PaperButtonProps, 'children' | 'labelStyle' | 'mode'> {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  mode?: PaperButtonProps['mode'];
}
