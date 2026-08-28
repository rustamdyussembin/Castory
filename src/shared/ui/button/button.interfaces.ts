import { ReactNode } from 'react';
import { PressableProps, StyleProp, TextStyle } from 'react-native';

export interface IButtonProps extends Omit<PressableProps, 'children'> {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}
