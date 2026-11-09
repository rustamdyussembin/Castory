import { useRodStore } from '@/entities/rod';
import { type IStartSessionData, useSessionStore } from '@/entities/session';
import { useSpodStore } from '@/entities/spod';

export const startNewSession = (data: IStartSessionData): void => {
  useRodStore.getState().clearRods();
  useSpodStore.getState().clearSpods();
  useSessionStore.getState().startSession(data);
};
