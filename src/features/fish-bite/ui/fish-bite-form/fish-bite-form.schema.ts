import type { TFunction } from 'i18next';
import { z } from 'zod';

import { parsePositiveDecimal } from '@/shared/lib/number';

const MAX_FISH_NAME_LENGTH = 100;

export const createFishBiteFormSchema = (t: TFunction) =>
  z.object({
    fish: z
      .string()
      .trim()
      .min(1, t('fishBite.form.validation.required'))
      .max(MAX_FISH_NAME_LENGTH, t('fishBite.form.validation.maxLength', { count: MAX_FISH_NAME_LENGTH })),
    weight: z
      .string()
      .trim()
      .min(1, t('fishBite.form.validation.required'))
      .refine((value) => parsePositiveDecimal(value) !== undefined, t('fishBite.form.validation.positiveNumber'))
      .transform((value) => parsePositiveDecimal(value) as number),
  });

export type FishBiteFormInput = z.input<ReturnType<typeof createFishBiteFormSchema>>;
