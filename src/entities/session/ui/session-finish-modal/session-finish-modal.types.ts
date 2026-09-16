import { Dispatch, SetStateAction } from 'react';

export interface ISessionFinishModalProps {
  isConfirmationOpen: boolean;
  onSetIsConfirmationOpen: Dispatch<SetStateAction<boolean>>;
  onConfirmFinish: VoidFunction;
}
