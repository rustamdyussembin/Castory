import type { StyleProp, ViewStyle } from 'react-native';

import type { IRod } from '@/entities/rod';

export interface IFishBiteButtonProps {
  rodId: IRod['id'];
  style?: StyleProp<ViewStyle>;
}
