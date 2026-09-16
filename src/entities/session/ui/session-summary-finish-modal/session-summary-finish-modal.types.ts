import { Dispatch, SetStateAction } from 'react';
import { ICompletedSessionSummary, IFishingResultStats } from '@/shared/types';

export interface ISessionSummaryFinishModalProps {
  completedSession: ICompletedSessionSummary | null;
  completedStats: IFishingResultStats | null;
  onSetCompletedSession: Dispatch<SetStateAction<ICompletedSessionSummary | null>>;
}
