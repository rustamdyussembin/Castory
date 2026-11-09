import type { SubmitHandler } from 'react-hook-form';

import type { ISpodInput } from '@/entities/spod';

export interface IAddSpodFormProps {
  initialValues?: ISpodInput;
  onCancel: () => void;
  onSubmit: SubmitHandler<ISpodInput>;
}
