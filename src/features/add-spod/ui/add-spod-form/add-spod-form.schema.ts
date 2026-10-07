import type { TFunction } from 'i18next';
import { z } from 'zod';

import { DISTANCE_OPTIONS } from '@/shared/constants';
import { parseWraps } from '@/shared/lib/distance';

export const createAddSpodFormSchema = (t: TFunction) =>
  z.object({
    wraps: z
      .string()
      .trim()
      .min(1, t('spod.form.validation.required'))
      .refine((value) => parseWraps(value) !== undefined, t('spod.form.validation.positiveNumber'))
      .transform((value) => parseWraps(value) as number),
    pegDistance: z.enum(DISTANCE_OPTIONS).transform((value) => Number(value)),
  });

export type AddSpodFormInput = z.input<ReturnType<typeof createAddSpodFormSchema>>;
