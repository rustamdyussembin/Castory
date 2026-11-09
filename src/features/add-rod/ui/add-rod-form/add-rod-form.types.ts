import type { SubmitHandler } from 'react-hook-form';

import type { IRodInput } from '@/entities/rod';

export interface IAddRodFormProps {
  initialValues?: IRodInput;
  onCancel: () => void;
  onSubmit: SubmitHandler<IRodInput>;
}
