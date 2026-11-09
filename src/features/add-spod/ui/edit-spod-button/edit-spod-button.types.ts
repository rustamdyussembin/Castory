import type { StyleProp, ViewStyle } from 'react-native';

import type { ISpod } from '@/entities/spod';

export interface IEditSpodButtonProps {
  spodId: ISpod['id'];
  style?: StyleProp<ViewStyle>;
}
