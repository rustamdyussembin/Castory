import { Button as PaperButton } from 'react-native-paper';

import type { IButtonProps } from './button.interfaces';

export const Button = ({ children, textStyle, mode = 'contained', ...props }: IButtonProps) => {
  return (
    <PaperButton {...props} labelStyle={textStyle} mode={mode}>
      {children}
    </PaperButton>
  );
};
