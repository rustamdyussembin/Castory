import type { SubmitHandler } from 'react-hook-form';

import type { AddRodData } from '@/entities/rod';

export interface IAddRodFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<AddRodData>;
}
