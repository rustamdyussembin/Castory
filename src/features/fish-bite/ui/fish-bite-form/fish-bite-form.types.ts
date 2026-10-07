import type { SubmitHandler } from 'react-hook-form';
import { IFishBiteData } from '@/entities/fishing-result';

export interface IFishBiteFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<IFishBiteData>;
}
