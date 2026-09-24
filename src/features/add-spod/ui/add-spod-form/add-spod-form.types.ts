import type { SubmitHandler } from 'react-hook-form';

import type { Spod, SpodFormData } from '@/entities/spod';

export interface IAddSpodFormProps {
  initialValues?: Pick<Spod, 'pegDistance' | 'wraps'>;
  onCancel: () => void;
  onSubmit: SubmitHandler<SpodFormData>;
}
