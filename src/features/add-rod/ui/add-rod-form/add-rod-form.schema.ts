import type { TFunction } from 'i18next';
import { z } from 'zod';

import type { PegDistance } from '@/entities/rod';
import { PEG_DISTANCE_OPTIONS } from '@/shared/lib/peg-distance';

import { parseRodWraps } from '../../lib/calculate-rod-distance';

const MAX_BAIT_LENGTH = 100;

export const createAddRodFormSchema = (t: TFunction) =>
  z.object({
    bait: z
      .string()
      .trim()
      .min(1, t('rod.form.validation.required'))
      .max(MAX_BAIT_LENGTH, t('rod.form.validation.maxLength', { count: MAX_BAIT_LENGTH })),
    wraps: z
      .string()
      .trim()
      .refine(
        (value) => value.length === 0 || parseRodWraps(value) !== undefined,
        t('rod.form.validation.positiveNumber'),
      )
      .transform((value) => parseRodWraps(value)),
    pegDistance: z.enum(PEG_DISTANCE_OPTIONS).transform((value) => Number(value) as PegDistance),
  });

export type AddRodFormInput = z.input<ReturnType<typeof createAddRodFormSchema>>;
