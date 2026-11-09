import type { IActiveSession } from '../session.types';

export const isActiveSession = (value: unknown): value is IActiveSession => {
  if (typeof value !== 'object' || value === null) return false;

  const session = value as Partial<IActiveSession>;

  return (
    typeof session.venue === 'string' &&
    session.venue.length > 0 &&
    (session.sector === undefined || typeof session.sector === 'string') &&
    typeof session.startedAt === 'number' &&
    Number.isFinite(session.startedAt)
  );
};
