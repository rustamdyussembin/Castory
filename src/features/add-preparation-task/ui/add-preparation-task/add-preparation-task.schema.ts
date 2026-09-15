import type { TFunction } from 'i18next';
import { z } from 'zod';

export const MAX_PREPARATION_TASK_TITLE_LENGTH = 120;

export const createAddPreparationTaskSchema = (t: TFunction) =>
  z.object({
    title: z
      .string()
      .trim()
      .min(1, t('preparation.validation.required'))
      .max(
        MAX_PREPARATION_TASK_TITLE_LENGTH,
        t('preparation.validation.maxLength', { count: MAX_PREPARATION_TASK_TITLE_LENGTH }),
      ),
  });

export type AddPreparationTaskInput = z.input<ReturnType<typeof createAddPreparationTaskSchema>>;
export type AddPreparationTaskData = z.output<ReturnType<typeof createAddPreparationTaskSchema>>;
