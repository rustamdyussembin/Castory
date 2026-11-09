import { IconButton as PaperIconButton } from 'react-native-paper';

import type { IIconButtonProps } from './icon-button.types';

export const IconButton = (props: IIconButtonProps) => {
  return <PaperIconButton {...props} />;
};
