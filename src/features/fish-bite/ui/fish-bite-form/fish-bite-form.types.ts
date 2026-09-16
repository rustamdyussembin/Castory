import type { SubmitHandler } from 'react-hook-form';
import { IFishBiteData } from '@/shared/types';

export interface IFishBiteFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<IFishBiteData>;
}
