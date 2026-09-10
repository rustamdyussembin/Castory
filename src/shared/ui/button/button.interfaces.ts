import { ReactNode } from 'react';
import { PressableProps, StyleProp, TextStyle } from 'react-native';

export type TButtonVariant = 'primary' | 'secondary';

export interface IButtonProps extends Omit<PressableProps, 'children'> {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  variant?: TButtonVariant;
}
