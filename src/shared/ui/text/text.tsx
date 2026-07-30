import { StyleSheet, Text as RNText, TextProps } from 'react-native';
import { FC } from 'react';

export const Text: FC<TextProps> = ({ children, style }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 32,
    fontWeight: '700',
  },
});
