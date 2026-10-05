import type { SubmitHandler } from 'react-hook-form';

import type { IStartSessionData } from '@/entities/session';

export interface IStartSessionFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<IStartSessionData>;
}
