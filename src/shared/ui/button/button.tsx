import { Pressable } from 'react-native';

import { Text } from '../text';
import { IButtonProps } from './button.interfaces';
import { styles } from './button.styles';
import { useThemeColors } from '@/shared/theme';

export const Button = ({
  accessibilityRole,
  accessibilityState,
  children,
  disabled = false,
  hitSlop = 4,
  style,
  textStyle,
  ...props
}: IButtonProps) => {
  const colors = useThemeColors();
  const isDisabled = disabled ?? false;

  return (
    <Pressable
      {...props}
      accessibilityRole={accessibilityRole ?? 'button'}
      accessibilityState={{ ...accessibilityState, disabled: isDisabled }}
      disabled={isDisabled}
      hitSlop={hitSlop}
      style={(state) => [
        styles.button,
        { backgroundColor: colors.accent },
        state.pressed && styles.pressed,
        isDisabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      <Text style={[styles.text, { color: colors.onAccent }, textStyle]}>{children}</Text>
    </Pressable>
  );
};
