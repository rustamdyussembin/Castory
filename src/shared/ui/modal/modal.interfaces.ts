import type { PropsWithChildren, ReactNode } from 'react';

export interface IModalProps extends PropsWithChildren {
  visible: boolean;
  title?: ReactNode;
  onClose: () => void;
}
