import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    minHeight: 44,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
