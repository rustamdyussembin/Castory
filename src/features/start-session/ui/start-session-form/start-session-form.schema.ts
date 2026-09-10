import { z } from 'zod';

export const startSessionFormSchema = z.object({
  venue: z.string().trim().min(1, 'Введите название сессии'),
  sector: z.string().trim().max(500, 'Не больше 500 символов'),
});
