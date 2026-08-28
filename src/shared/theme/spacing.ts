import { Platform } from 'react-native';

export const spacing = {
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 24,
  6: 32,
  7: 64,
} as const;

export const bottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const maxContentWidth = 800;
