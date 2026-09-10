import { Pressable } from 'react-native';

import { useThemeColors } from '@/shared/theme';

import { Text } from '../text';
import { IButtonProps } from './button.interfaces';
import { styles } from './button.styles';

export const Button = ({
  accessibilityRole,
  accessibilityState,
  children,
  disabled = false,
  hitSlop = 4,
  style,
  textStyle,
  variant = 'primary',
  ...props
}: IButtonProps) => {
  const colors = useThemeColors();
  const isDisabled = disabled ?? false;
  const backgroundColor = variant === 'primary' ? colors.primary : colors.secondary;
  const textColor = variant === 'primary' ? colors.onPrimary : colors.onSecondary;

  return (
    <Pressable
      {...props}
      accessibilityRole={accessibilityRole ?? 'button'}
      accessibilityState={{ ...accessibilityState, disabled: isDisabled }}
      disabled={isDisabled}
      hitSlop={hitSlop}
      style={(state) => [
        styles.button,
        { backgroundColor },
        state.pressed && styles.pressed,
        isDisabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{children}</Text>
    </Pressable>
  );
};
