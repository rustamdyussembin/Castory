import type { TFunction } from 'i18next';
import { z } from 'zod';

import { DISTANCE_OPTIONS } from '@/shared/config';
import { parseWraps } from '@/shared/lib/distance';

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
      .refine((value) => value.length === 0 || parseWraps(value) !== undefined, t('rod.form.validation.positiveNumber'))
      .transform((value) => parseWraps(value)),
    pegDistance: z.enum(DISTANCE_OPTIONS).transform((value) => Number(value)),
  });

export type AddRodFormInput = z.input<ReturnType<typeof createAddRodFormSchema>>;
