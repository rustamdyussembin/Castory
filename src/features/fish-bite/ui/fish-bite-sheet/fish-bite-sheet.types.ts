import type { SubmitHandler } from 'react-hook-form';

import type { FishBiteData } from '../../fish-bite.types';

export interface IFishBiteSheetProps {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<FishBiteData>;
}
