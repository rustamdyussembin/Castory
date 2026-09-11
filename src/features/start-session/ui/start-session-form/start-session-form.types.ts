import type { SubmitHandler } from 'react-hook-form';

import type { StartSessionData } from '@/entities/session';

export interface IStartSessionFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<StartSessionData>;
}
