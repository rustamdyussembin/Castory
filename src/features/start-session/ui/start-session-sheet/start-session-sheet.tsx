import { BottomSheet } from '@/shared/ui';
import { StartSessionForm } from '../start-session-form/start-session-form';
import { useState } from 'react';
import { IStartSession } from '../../start-session.types';

export const StartSessionSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IStartSession | null>(null);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data: IStartSession) => setData(data);

  return (
    <BottomSheet open={isOpen} onClose={handleClose}>
      <StartSessionForm onCancel={handleClose} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
