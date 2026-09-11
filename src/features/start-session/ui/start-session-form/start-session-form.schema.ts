import type { TFunction } from 'i18next';
import { z } from 'zod';

const MAX_LENGTH = 100;

export const createStartSessionFormSchema = (t: TFunction) =>
  z.object({
    venue: z
      .string()
      .trim()
      .min(1, t('session.form.validation.required'))
      .max(MAX_LENGTH, t('session.form.validation.maxLength', { count: MAX_LENGTH })),
    sector: z
      .string()
      .trim()
      .max(MAX_LENGTH, t('session.form.validation.maxLength', { count: MAX_LENGTH })),
  });
