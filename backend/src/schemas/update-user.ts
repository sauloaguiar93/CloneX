import { z } from "zod";

export const updateUserSchema = z.object({
    name: z.string().min(2, 'O nome precisa ser maior que 2 caracteres.').optional(),
    bio: z.string().optional(),
    link: z.string().url('O link precisa ser uma URL válida.').optional(),
});