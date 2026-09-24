import type { TFunction } from 'i18next';
import { z } from 'zod';

import { PEG_DISTANCE_OPTIONS, type PegDistance } from '@/shared/lib/peg-distance';

import { parseSpodWraps } from '../../lib/calculate-spod-form-distance';

export const createAddSpodFormSchema = (t: TFunction) =>
  z.object({
    wraps: z
      .string()
      .trim()
      .min(1, t('spod.form.validation.required'))
      .refine((value) => parseSpodWraps(value) !== undefined, t('spod.form.validation.positiveNumber'))
      .transform((value) => parseSpodWraps(value) as number),
    pegDistance: z.enum(PEG_DISTANCE_OPTIONS).transform((value) => Number(value) as PegDistance),
  });

export type AddSpodFormInput = z.input<ReturnType<typeof createAddSpodFormSchema>>;
