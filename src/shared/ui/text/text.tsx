import type { FC } from 'react';
import { Text as PaperText } from 'react-native-paper';

import type { ITextProps, TextVariant } from './text.types';

const paperVariants: Record<TextVariant, 'bodyLarge' | 'bodyMedium' | 'bodySmall'> = {
  bodyM: 'bodyLarge',
  bodyS: 'bodyMedium',
  bodyXS: 'bodySmall',
};

export const Text: FC<ITextProps> = ({ children, style, variant = 'bodyM', ...props }) => {
  return (
    <PaperText {...props} style={style} variant={paperVariants[variant]}>
      {children}
    </PaperText>
  );
};
