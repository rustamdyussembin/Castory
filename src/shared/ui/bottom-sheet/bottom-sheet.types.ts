import type { PropsWithChildren } from 'react';

export interface IBottomSheetProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string;
  dismissible?: boolean;
  snapPoints?: (string | number)[];
}
