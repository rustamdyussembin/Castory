import { FC } from 'react';
import { Text as RNText } from 'react-native';

import { ITextProps } from './text.interfaces';
import { styles } from './text.styles';

export const Text: FC<ITextProps> = ({ children, style, variant = 'bodyM', ...props }) => {
  return (
    <RNText {...props} style={[styles.text, styles[variant], style]}>
      {children}
    </RNText>
  );
};
