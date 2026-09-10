import { StyleSheet } from 'react-native';

import { BottomSheet } from '@/shared/ui';

export const StartSessionSummary = () => {
  return (
    <BottomSheet open onClose={() => null}>
      qwe
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 4,
  },
});
