import { IStartSession } from '../../start-session.types';
import { SubmitHandler } from 'react-hook-form';

export interface IStartSessionFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<IStartSession>;
}
