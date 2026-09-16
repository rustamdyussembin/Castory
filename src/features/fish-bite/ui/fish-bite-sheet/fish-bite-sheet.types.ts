import type { SubmitHandler } from 'react-hook-form';
import { IFishBiteData } from '@/shared/types';

export interface IFishBiteSheetProps {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<IFishBiteData>;
}
