import type { TFunction } from 'i18next';
import { z } from 'zod';

const MAX_FISH_NAME_LENGTH = 100;

const parseWeight = (value: string): number | undefined => {
  const normalizedValue = value.trim().replace(',', '.');
  if (!normalizedValue) return undefined;

  const weight = Number(normalizedValue);
  return Number.isFinite(weight) && weight > 0 ? weight : undefined;
};

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
      .refine((value) => parseWeight(value) !== undefined, t('fishBite.form.validation.positiveNumber'))
      .transform((value) => parseWeight(value) as number),
  });

export type FishBiteFormInput = z.input<ReturnType<typeof createFishBiteFormSchema>>;
