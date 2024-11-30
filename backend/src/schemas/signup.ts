import { z } from "zod";

export const signupSchema = z.object({
    name: z.string({ message: 'Nome é obrigatório!' }).min(2, 'O nome precisa ser maior que 2 caracteres.'),
    email: z.string({ message: 'E-mail é obrigatório!' }).email('Digite um e-mail válido!'),
    password: z.string({ message: 'Senha é obrigatória!' }).min(4, 'A senha precisa ser maior que 4 caracteres.')
});