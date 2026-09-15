import type { SubmitHandler } from 'react-hook-form';

import type { AddRodData, Rod } from '@/entities/rod';

export interface IAddRodFormProps {
  initialValues?: Pick<Rod, 'bait' | 'pegDistance' | 'wraps'>;
  onCancel: () => void;
  onSubmit: SubmitHandler<AddRodData>;
}
