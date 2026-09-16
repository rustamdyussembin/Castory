import NativeBottomSheet, { BottomSheetView } from '@expo/ui/community/bottom-sheet';
import { useCallback } from 'react';
import { View } from 'react-native';
import { Portal } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { spacing, useThemeColors } from '@/shared/theme';

import { Text } from '../text';
import type { IBottomSheetProps } from './bottom-sheet.types';
import { styles } from './bottom-sheet.styles';

export const BottomSheet = ({ children, dismissible = true, onClose, open, snapPoints, title }: IBottomSheetProps) => {
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();

  const handleClose = useCallback(() => {
    if (dismissible && open) onClose();
  }, [dismissible, onClose, open]);

  return (
    <NativeBottomSheet
      backgroundStyle={{ ...styles.background, backgroundColor: colors.background }}
      enablePanDownToClose={dismissible}
      index={open ? 0 : -1}
      onClose={handleClose}
      snapPoints={snapPoints}
    >
      <BottomSheetView>
        <Portal.Host>
          <View
            accessibilityViewIsModal
            style={[styles.content, { paddingBottom: Math.max(insets.bottom, spacing[4]) }]}
          >
            {title ? (
              <Text accessibilityRole="header" style={styles.title}>
                {title}
              </Text>
            ) : null}
            {children}
          </View>
        </Portal.Host>
      </BottomSheetView>
    </NativeBottomSheet>
  );
};
