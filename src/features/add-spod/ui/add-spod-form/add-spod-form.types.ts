import type { SubmitHandler } from 'react-hook-form';

import type { ISpod, ISpodFormData } from '@/entities/spod';

export interface IAddSpodFormProps {
  initialValues?: Pick<ISpod, 'pegDistance' | 'wraps'>;
  onCancel: () => void;
  onSubmit: SubmitHandler<ISpodFormData>;
}
