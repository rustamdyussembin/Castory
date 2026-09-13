import { Button as PaperButton } from 'react-native-paper';

import type { IButtonProps } from './button.interfaces';

export const Button = ({
  children,
  textStyle,
  variant = 'primary',
  ...props
}: IButtonProps) => {
  return (
    <PaperButton
      {...props}
      labelStyle={textStyle}
      mode={variant === 'primary' ? 'contained' : 'contained-tonal'}
    >
      {children}
    </PaperButton>
  );
};
