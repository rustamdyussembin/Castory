import type { TFunction } from 'i18next';
import { z } from 'zod';

export const createStartSessionFormSchema = (t: TFunction) =>
  z.object({
    venue: z.string().trim().min(1, t('session.form.validation.venueRequired')),
    sector: z.string().trim().max(500, t('session.form.validation.sectorMaxLength', { count: 500 })),
  });
