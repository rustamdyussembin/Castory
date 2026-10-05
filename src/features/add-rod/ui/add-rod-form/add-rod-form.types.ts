import type { SubmitHandler } from 'react-hook-form';

import type { IAddRodData, IRod } from '@/entities/rod';

export interface IAddRodFormProps {
  initialValues?: Pick<IRod, 'bait' | 'pegDistance' | 'wraps'>;
  onCancel: () => void;
  onSubmit: SubmitHandler<IAddRodData>;
}
