import type { SubmitHandler } from 'react-hook-form';

import type { FishBiteData } from '../../fish-bite.types';

export interface IFishBiteFormProps {
  onCancel: () => void;
  onSubmit: SubmitHandler<FishBiteData>;
}
